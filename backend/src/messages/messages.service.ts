import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  message: Message[] = [{ name: 'fasf', text: 'dafs' }];
  create(createMessageDto: CreateMessageDto) {
    console.log('This action adds a new message');
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all messages`;
  }
}
