import { Module } from "@nestjs/common";
import { ChannelService } from "src/channel/channel.service";
import { FriendshipService } from "src/friendship/friendship.service";
import { GameService } from "src/game/game.service";
import { NotificationService } from "src/notification/notification.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { SocketGameGateway } from "./socketGame.gateway";
import { SocketGameGatewayService } from "./socketGame.service";

@Module({
  providers: [
    SocketGameGateway,
    SocketGameGatewayService,
    UserService,
    ChannelService,
    GameService,
    FriendshipService,
    PrismaService,
    NotificationService
  ],
})
export class SocketGameGatewayModule { }
