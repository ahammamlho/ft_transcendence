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
  ) { }

  async create(server: Server, createMessageDto: CreateMessageDto) {
    const msg = await this.prisma.directMessage.create({
      data: {
        ...createMessageDto,
      },
    });
    server.to(msg.receivedId.toString()).emit('findMsg2UsersResponse', msg);
  }


  async getMessage(senderId: number, receivedId: number) {
    const msgUser = await this.prisma.directMessage.findMany({
      where: {
        OR: [
          {
            senderId,
            receivedId,
          },
          {
            senderId: receivedId,
            receivedId: senderId,
          },
        ],
      },
    });
    return msgUser;
  }
}
