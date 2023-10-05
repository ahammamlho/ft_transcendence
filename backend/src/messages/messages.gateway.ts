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

  private connectedClients: Map<number, Socket> = new Map();
  @WebSocketServer() wss: Server;
  afterInit(server: any) {
    console.log('Gateway Initialized');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(this.wss);
    console.log(`Client connected: ${client.id}`);
    // console.log(client.handshake.query.userId[0]);
    await this.messagesService.findMsg2Users(client, {
      content: '',
      senderId: parseInt(client.handshake.query.senderId as string),
      receivedId: parseInt(client.handshake.query.receivedId as string),
    });
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createMessage')
  create(
    @ConnectedSocket() client: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    this.messagesService.create(client, createMessageDto);
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }
}
