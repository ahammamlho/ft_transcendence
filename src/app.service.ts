import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async creatUser(user: any) {
    const u = await this.prisma.user.create({
      data: user,
    });
  }

  async getAllUser() {
    const user = this.prisma.user.findMany();
    return user;
  }
}
