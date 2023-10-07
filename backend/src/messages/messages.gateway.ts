import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  OnGatewayDisconnect,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server, Socket } from 'socket.io';
@WebSocketGateway()
export class MessagesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messagesService: MessagesService) {}
  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    console.log('Gateway Initialized');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    // console.log();
    client.join(client.handshake.query.senderId);
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createMessage')
  async create(
    @ConnectedSocket() client: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    console.log('server : recived message');
    console.log(createMessageDto);
    await this.messagesService.create(createMessageDto);
    await this.messagesService.findMsg2Users(this.wss, createMessageDto);
  }

  @SubscribeMessage('findMsg2Users')
  async findMsgUsers(
    server: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    await this.messagesService.findMsg2Users(this.wss, createMessageDto);
  }
}
