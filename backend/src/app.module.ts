import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { MessagesModule } from "./messages/messages.module";
import { FriendshipModule } from "./friendship/friendship.module";
import { ChannelModule } from "./channel/channel.module";
import { SocketGatewayModule } from "./socket/socket.module";

import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { GameModule } from "./game/game.module";
import { NotificationModule } from "./notification/notification.module";
import { SocketChatGatewayModule } from "./sockeChat/socketChat.module";
import { SocketGameGatewayModule } from "./socketGame/socketGame.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    MessagesModule,
    FriendshipModule,
    ChannelModule,
    SocketGatewayModule,
    SocketChatGatewayModule,
    SocketGameGatewayModule,
    GameModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/uploads",
    }),
    NotificationModule
  ],


  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
