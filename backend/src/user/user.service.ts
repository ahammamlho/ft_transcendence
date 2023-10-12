import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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
    const req = await this.prisma.friendRequest.findUnique({
      where: {
        Unique_Sender_Receiver: {
          senderId: sendId,
          receivedId: recivedId,
        },
      },
    });
    console.log(req);
    if (!req) {
      const newReq = await this.prisma.friendRequest.create({
        data: {
          senderId: sendId,
          receivedId: recivedId,
        },
      });
      return newReq;
    }
    return req;
  }

  async getFriendsRequist(senderId: number) {
    const requ = await this.prisma.friendRequest.findMany({
      where: {
        receivedId: senderId,
      },
    });
    return requ;
  }
}
