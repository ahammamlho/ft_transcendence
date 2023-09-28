import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway implements OnGatewayInit {
  private logger: Logger = new Logger('ChatGateway');
  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('chatToServer')
  handleMessage(client: Socket, message: { sender: string; message: string }) {
    console.log('I get msg from client');
    this.wss.emit('chatToClient', message);
  }
}
