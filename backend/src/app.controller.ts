import { Query, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/check')
  checkIfUserExist(@Query() query) {
    return this.appService.checkUser(query);
  }
}
