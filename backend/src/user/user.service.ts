import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';
import { Server } from 'socket.io';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

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


