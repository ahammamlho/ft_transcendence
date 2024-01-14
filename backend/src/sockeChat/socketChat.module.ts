import { Module } from "@nestjs/common";
import { ChannelService } from "src/channel/channel.service";
import { FriendshipService } from "src/friendship/friendship.service";
import { MessagesService } from "src/messages/messages.service";
import { NotificationService } from "src/notification/notification.service";
import { UserService } from "src/user/user.service";
import { SocketChatGateway } from "./socketChat.gateway";
import { SocketChatGatewayService } from "./socketChat.service";

@Module({
  providers: [
    SocketChatGateway,
    SocketChatGatewayService,
    MessagesService,
    UserService,
    ChannelService,
    FriendshipService,
    NotificationService
  ],
})
export class SocketChatGatewayModule { }
