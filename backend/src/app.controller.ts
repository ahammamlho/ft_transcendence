import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  createUser(@Body() body: any) {
    console.log(body);
    return this.appService.creatUser(body);
  }

  @Get('allUser')
  getAllUser() {
    return this.appService.getAllUser();
  }

  @Post('post')
  creatPost() {}

  @Get('allPost')
  getAllPost() {}
}
