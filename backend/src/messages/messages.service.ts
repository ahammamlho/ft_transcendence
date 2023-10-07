import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { Socket, Server } from 'socket.io';

@Injectable()
export class MessagesService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    await this.prisma.directMessage.create({
      data: {
        ...createMessageDto,
      },
    });
  }

  async createConnection(createMessageDto: CreateMessageDto) {}

  async findMsg2Users(server: Server, twoUsers: CreateMessageDto) {
    const msgUser = await this.prisma.directMessage.findMany({
      where: {
        OR: [
          {
            senderId: twoUsers.senderId,
            receivedId: twoUsers.receivedId,
          },
          {
            senderId: twoUsers.receivedId,
            receivedId: twoUsers.senderId,
          },
        ],
      },
      orderBy: {
        date: 'asc',
      },
    });
    server.to(twoUsers.senderId.toString()).emit('findMsg2UsersResponse', {
      senderId: twoUsers.senderId,
      receivedId: twoUsers.receivedId,
      msgUser: msgUser,
    });
    if (twoUsers.content != '') {
      server.to(twoUsers.receivedId.toString()).emit('findMsg2UsersResponse', {
        senderId: twoUsers.senderId,
        receivedId: twoUsers.receivedId,
        msgUser: msgUser,
      });
    }
  }

  getSocketClientById(userId: number): Socket {
    return;
  }
}
