import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  OnGatewayDisconnect,
  WebSocketServer,
  ConnectedSocket,
} from "@nestjs/websockets";

import { Server, Socket } from "socket.io";
import { MessagesService } from "src/messages/messages.service";
import { CreateMessageDto } from "src/messages/dto/create-message.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { GameService } from "src/game/game.service";
import { BallDto, PaddleDto } from "src/game/dto";
import { UseGuards } from "@nestjs/common";
import { JwtGuardSocket } from 'src/auth/guard/jwt.guard-socket';
import { SocketChatGatewayService } from "./socketChat.service";
// import { PongServise } from "src/game/game.service";


@UseGuards(JwtGuardSocket)
@WebSocketGateway({ transports: ['websocket'], namespace: 'chat' })
export class SocketChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private socketChatService: SocketChatGatewayService,
    private messagesService: MessagesService,
  ) { }

  @WebSocketServer() server: Server;

  async handleConnection(client: Socket) {
    console.log("socket chat has been connected");
    this.socketChatService.handleConnection(client, this.server);
  }

  async handleDisconnect(client: Socket) {
    console.log("socket chat has been disconnected");
  }

  @SubscribeMessage("createMessage")
  async createMessage(@MessageBody() createMessageDto: CreateMessageDto) {
    await this.messagesService.createMessage(this.server, createMessageDto);
  }

  @SubscribeMessage("isTyping")
  async isTyping(@MessageBody() ids: CreateMessageDto) {
    this.server.to(ids.receivedId).emit("isTyping", ids);
  }

  @SubscribeMessage("emitNewMessage")
  async joinChannelEmit(@MessageBody() ids: CreateMessageDto) {
    this.socketChatService.emitNewMessage(ids, this.server);
  }

  @SubscribeMessage("messagsSeenEmit")
  async messagsSeenEmit(@MessageBody() ids: CreateMessageDto) {
    this.socketChatService.messagsSeenEmit(ids, this.server);
  }
}

