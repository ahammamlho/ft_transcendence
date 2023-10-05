import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { Socket } from 'socket.io';

@Injectable()
export class MessagesService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}
  async create(client: Socket, createMessageDto: CreateMessageDto) {
    await this.prisma.directMessage.create({
      data: {
        ...createMessageDto,
      },
    });
    await this.findMsg2Users(client, createMessageDto);
  }

  findAll() {
    return `This action returns all messages`;
  }

  async findMsg2Users(socket: Socket, twoUsers: CreateMessageDto) {
    const msgUser = await this.prisma.directMessage.findMany({
      where: {
        OR: [
          {
            senderId: twoUsers.senderId,
            receivedId: twoUsers.receivedId,
          },
          {
            senderId: twoUsers.receivedId,
            receivedId: twoUsers.receivedId,
          },
        ],
      },
      orderBy: {
        date: 'asc', // 'asc' for ascending, 'desc' for descending
      },
    });
    socket.emit('findMsg2UsersResponse', msgUser);
  }
  getSocketClientById(userId: number): Socket {
    return;
  }
}
