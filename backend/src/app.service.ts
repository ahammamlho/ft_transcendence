import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async checkUser(query) {
    const { username, password } = query;

    // Fetch the user from the database based on the username
    const user = await this.prisma.user.findFirst({
      where: { name: username },
    });
    console.log(user);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }

  async getAllUser() {
    const users = await this.prisma.user.findMany();
    console.log(users);
    return users;
  }
}
