import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // constructor(config: ConfigService) {
  //   super({
  //     datasources: {
  //       db: {
  //         url: config.get('DATABASE_URL'),
  //       },
  //     },
  //   });
  // }
}
