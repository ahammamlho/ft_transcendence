import { Logger } from '@nestjs/common';
import {
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'dsf' })
export class ChatGateway implements OnGatewayInit, OnGatewayDisconnect {
  private logger: Logger = new Logger('ChatGateway');
  private connectedClients: Map<string, Socket> = new Map();
  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.log('Initialized');
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
    for (let key of this.connectedClients.keys()) {
      if (client.id === this.connectedClients.get(key).id) {
        this.connectedClients.delete(key);
        this.wss.emit('addClient', { action: 'remove', username: key });
        break;
      }
    }
  }

  @SubscribeMessage('identify')
  handleIdentify(client: Socket, userId: string): void {
    // Associate the user ID with the WebSocket connection
    if (userId !== '') {
      this.connectedClients.set(userId, client);
      for (let key of this.connectedClients.keys()) {
        this.wss.emit('addClient', { action: 'add', username: key });
      }
    }
  }

  @SubscribeMessage('chatToServer')
  handleMessage(
    client2: Socket,
    message: { sender: string; sendTo: string; message: string },
  ) {
    const client = this.connectedClients.get(message.sendTo);
    console.log(message);
    if (client) {
      client.emit('chatToClient', message);
    } else {
      console.log(`Client not found.`);
    }
  }
}
