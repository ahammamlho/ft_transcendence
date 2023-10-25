import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';
import { MessagesService } from 'src/messages/messages.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService,
    private messagesService: MessagesService
  ) { }

  async create(dto: CreateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) throw new ConflictException('Email duplicated');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });
    const { password, ...result } = newUser;
    return result;
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getValideUsers(senderId: number) {
    const users = await this.prisma.user.findMany();
    const blockerUsers = await this.prisma.blockedUser.findMany(
      {
        where: {
          OR: [
            { senderId: senderId },
            { receivedId: senderId }
          ]
        },
      }
    );
    const temp = users.filter((user) => {
      if (user.id === senderId)
        return false
      const found = blockerUsers.find((elm) => {
        return (senderId === elm.senderId && user.id === elm.receivedId) ||
          (senderId === elm.receivedId && user.id === elm.senderId)
      })
      if (found)
        return false;
      return true;
    })
    const result = await Promise.all(temp.map(async (user) => {
      let friends = await this.prisma.friend.findFirst({
        where: {
          OR: [
            {
              senderId: senderId,
              receivedId: user.id,
            },
            {
              senderId: user.id,
              receivedId: senderId,
            },
          ],
        },
      });
      if (friends)
        return { ...user, friendship: 1 };
      let freiReq = await this.prisma.friendRequest.findFirst({
        where: {
          senderId: user.id,
          receivedId: senderId,
        },
      });
      if (freiReq)
        return { ...user, friendship: 2 };
      let sendReq = await this.prisma.friendRequest.findFirst({
        where: {
          senderId: senderId,
          receivedId: user.id,
        },
      });
      if (sendReq)
        return { ...user, friendship: 3 };
      return { ...user, friendship: 0 };
    }));
    return result;
  }
  s; lk;
  async getUserForMsg(senderId: number) {
    const users = await this.prisma.user.findMany();
    const usersMsg = await this.prisma.directMessage.findMany({
      where: {
        OR: [
          { senderId: senderId },
          { receivedId: senderId }
        ]
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    const distinctUserIds = new Set<number>();
    for (const msg of usersMsg) {
      if (msg.senderId === senderId) {
        distinctUserIds.add(msg.receivedId);
      } else {
        distinctUserIds.add(msg.senderId);
      }
    }
    const idUsersArray = Array.from(distinctUserIds);
    const usersMsgList = idUsersArray.map((id) => users.find((user) => user.id === id));
    let lastMsgs = [];
    for (let i = 0; i < usersMsgList.length; i++) {
      const temp = await this.messagesService.getLastMessages(senderId, usersMsgList[i].id);
      lastMsgs.push(temp);
    }
    return { usersMsgList, lastMsgs };
  }

  async sendFriendRequist(sendId: number, recivedId: number) {
    let req = await this.prisma.friendRequest.findUnique({
      where: {
        Unique_Sender_Receiver: {
          senderId: sendId,
          receivedId: recivedId,
        },
      },
    });
    if (!req) {
      req = await this.prisma.friendRequest.create({
        data: {
          senderId: sendId,
          receivedId: recivedId,
        },
      });
    }
    return req;
  }

  async removeFriendRequist(sendId: number, recivedId: number) {
    let req = await this.prisma.friendRequest.deleteMany({
      where: {
        senderId: sendId,
        receivedId: recivedId,
      },
    });
    return req;
  }

  async accepteFriendRequest(sendId: number, recivedId: number) {
    let req = await this.prisma.friend.findUnique({
      where: {
        Unique_Sender_Receiver: {
          senderId: sendId,
          receivedId: recivedId,
        },
      },
    });
    if (!req) {
      req = await this.prisma.friend.create({
        data: {
          senderId: sendId,
          receivedId: recivedId,
        },
      });
    }
    return req;
  }
  async deleteFriend(sendId: number, recivedId: number) {
    let req = await this.prisma.friend.deleteMany({
      where: {
        OR: [
          {
            senderId: sendId,
            receivedId: recivedId,
          },
          {
            senderId: recivedId,
            receivedId: sendId,
          }
        ]
      },
    });
    return req;
  }
  async blockedUser(sendId: number, recivedId: number) {
    let req = await this.prisma.blockedUser.findUnique({
      where: {
        Unique_Sender_Receiver: {
          senderId: sendId,
          receivedId: recivedId,
        },
      },
    });
    if (!req) {
      req = await this.prisma.blockedUser.create({
        data: {
          senderId: sendId,
          receivedId: recivedId,
        },
      });
    }
    return req;
  }

  async unBlockedUser(sendId: number, recivedId: number) {
    let req = await this.prisma.blockedUser.deleteMany({
      where: {
        senderId: sendId,
        receivedId: recivedId,
      },
    });
    return req;
  }
  async getSendRequistFriends(senderId: number) {
    const sendRequests = await this.prisma.friendRequest.findMany({
      where: {
        senderId: senderId,
      },
    });
    return sendRequests;
  }

  async getRecivedRequistFriends(senderId: number) {
    const sendRequests = await this.prisma.friendRequest.findMany({
      where: {
        receivedId: senderId,
      },
    });
    return sendRequests;
  }

  async getFriends(senderId: number) {
    const sendRequests = await this.prisma.friend.findMany({
      where: {
        OR: [
          {
            senderId: senderId,
          },
          {
            receivedId: senderId,
          }
        ]
      },
    });
    return sendRequests;
  }

  async getBlockedUser(senderId: number) {
    const sendRequests = await this.prisma.blockedUser.findMany({
      where: {
        OR: [
          {
            senderId: senderId,
          },
          {
            receivedId: senderId,
          }
        ]
      },
    });
    return sendRequests;
  }
}


