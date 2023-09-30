import { OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayInit, OnGatewayDisconnect {
    private logger;
    private connectedClients;
    wss: Server;
    afterInit(server: any): void;
    handleDisconnect(client: any): void;
    handleIdentify(client: Socket, userId: string): void;
    handleMessage(client2: Socket, message: {
        sender: string;
        sendTo: string;
        message: string;
    }): void;
}
