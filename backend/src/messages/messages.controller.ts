import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':send/:rec')
  async getMessages(@Param('send') send: string, @Param('rec') rec: string) {
    const r = parseInt(rec);
    const s = parseInt(send);

    if (isNaN(r) || isNaN(s)) return '';

    return this.messagesService.getMessage(s, r);
  }

  @Post('friendRequest:send/:rec')
  async addFriendRequest(
    @Param('send') send: string,
    @Param('rec') rec: string,
  ) {
    const r = parseInt(rec);
    const s = parseInt(send);
    console.log(`sender=${s}, recived=${r}`);
  }
}
