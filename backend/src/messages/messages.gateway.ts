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
    // console.log(this.wss.sockets);
    console.log(`Client connected: ${client.id}`);
    await this.messagesService.findMsg2Users(client, {
      content: '',
      senderId: parseInt(client.handshake.query.senderId as string),
      receivedId: parseInt(client.handshake.query.receivedId as string),
    });
    const queryParameters = client.handshake.query;

    // const clientReceived = this.wss.sockets.sockets[clientId];
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createMessage')
  async create(
    @ConnectedSocket() client: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    await this.messagesService.create(client, createMessageDto);

    this.wss.sockets.sockets.forEach(async (clt, idClient) => {
      if (
        parseInt(clt.handshake.query.receivedId as string) ==
        createMessageDto.receivedId
      ) {
        await this.messagesService.findMsg2Users(clt, createMessageDto);
      }
    });
  }

  @SubscribeMessage('findMsg2Users')
  findMsgUsers(
    @ConnectedSocket() client: Socket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    return this.messagesService.findMsg2Users(client, createMessageDto);
  }
}
