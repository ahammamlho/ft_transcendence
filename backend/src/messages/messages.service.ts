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
  async create(createMessageDto: CreateMessageDto) {
    const newMsg = await this.prisma.directMessage.create({
      data: {
        ...createMessageDto,
      },
    });

    return 'This action adds a new message';
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
          },
          {
            senderId: twoUsers.receivedId,
          },
        ],
      },
      orderBy: {
        date: 'asc', // 'asc' for ascending, 'desc' for descending
      },
    });
    socket.emit('findMsg2UsersResponse', msgUser);
  }
}
