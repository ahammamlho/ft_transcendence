import { Module } from "@nestjs/common";
import { ChannelService } from "src/channel/channel.service";
import { FriendshipService } from "src/friendship/friendship.service";
import { GameService } from "src/game/game.service";
import { NotificationService } from "src/notification/notification.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { SocketGateway } from "./socket.gateway";
import { SocketGatewayService } from "./socket.service";

@Module({
  providers: [
    SocketGateway,
    SocketGatewayService,
    UserService,
    ChannelService,
    GameService,
    FriendshipService,
    PrismaService,
    NotificationService
  ],
})
export class SocketGatewayModule { }
