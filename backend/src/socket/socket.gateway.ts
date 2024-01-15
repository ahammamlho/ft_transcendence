import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";

import { UseGuards } from "@nestjs/common";
import { Server, Socket } from "socket.io";
import { JwtGuardSocket } from 'src/auth/guard/jwt.guard-socket';
import { CreateMessageDto } from "src/messages/dto/create-message.dto";
import { SocketGatewayService } from "./socket.service";
// import { PongServise } from "src/game/game.service";


@UseGuards(JwtGuardSocket)
@WebSocketGateway({ transports: ['websocket'] })
export class SocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private socketGatewayService: SocketGatewayService,
  ) { }

  @WebSocketServer() server: Server;


  async handleConnection(client: Socket) {
    console.log("---- main socket has been connected ----");
    this.socketGatewayService.handleConnection(client, this.server);
  }

  async handleDisconnect(client: Socket) {
    console.log("---- main socket has been disconnected ----");
    this.socketGatewayService.handleDisconnect(client, this.server);
  }

  @SubscribeMessage("updateData")
  async updateData(@MessageBody() ids: CreateMessageDto) {
    this.socketGatewayService.updateData(ids, this.server);
  }


  @SubscribeMessage("updateStatusGeust")
  async updateStatusGeust(@MessageBody() senderId: string) {
    this.socketGatewayService.updateStatusGeust(senderId, this.server);
  }



  @SubscribeMessage("blockUserToUser")
  async blockUserToUser(@MessageBody() ids: CreateMessageDto) {
    this.server.to(ids.receivedId).emit("blockUserToUser", {});
    this.server.to(ids.senderId).emit("blockUserToUser", {});
  }

  @SubscribeMessage("mutedUserInChannel")
  async mutedUserInChannel(@MessageBody() idChannel: string) {
    this.socketGatewayService.mutedUserInChannel(idChannel, this.server);
  }

  @SubscribeMessage("sendNotification")
  async handleNotif(@MessageBody() receivedId: string) {
    this.server.to(receivedId).emit("sendNotification");
  }

}


