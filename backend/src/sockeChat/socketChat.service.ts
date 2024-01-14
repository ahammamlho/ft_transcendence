import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Server, Socket } from "socket.io";
import { MessageStatus, Status } from "@prisma/client";
import { CreateMessageDto } from "src/messages/dto/create-message.dto";

@Injectable()
export class SocketChatGatewayService {
  constructor(private prisma: PrismaService) { }

  async handleConnection(client: Socket, wss: Server) {
    try {
      const senderId: string = client.handshake.query.senderId.toString();
      client.join(senderId);
    } catch (error) { }
  }

  async emitNewMessage(ids: CreateMessageDto, wss: Server) {
    if (ids.isDirectMessage === false) {
      const channelMembers = await this.prisma.channelMember.findMany({
        where: { channelId: ids.receivedId },
      });
      for (const member of channelMembers) {
        wss.to(member.userId).emit("emitNewMessage", {});
      }
    } else wss.to(ids.receivedId).emit("emitNewMessage", {});
  }

  async messagsSeenEmit(ids: CreateMessageDto, wss: Server) {
    await this.prisma.message.updateMany({
      where: {
        senderId: ids.receivedId,
        receivedId: ids.senderId,
      },
      data: {
        messageStatus: MessageStatus.Seen,
      },
    });
    wss.to(ids.receivedId).emit("messagsSeenEmit");
  }

}
