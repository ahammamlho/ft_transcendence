"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatGateway = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger('ChatGateway');
        this.connectedClients = new Map();
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        for (let key of this.connectedClients.keys()) {
            if (client.id === this.connectedClients.get(key).id) {
                this.connectedClients.delete(key);
                this.wss.emit('addClient', { action: 'remove', username: key });
                break;
            }
        }
    }
    handleIdentify(client, userId) {
        if (userId !== '') {
            this.connectedClients.set(userId, client);
            for (let key of this.connectedClients.keys()) {
                this.wss.emit('addClient', { action: 'add', username: key });
            }
        }
    }
    handleMessage(client2, message) {
        const client = this.connectedClients.get(message.sendTo);
        console.log(message);
        if (client) {
            client.emit('chatToClient', message);
        }
        else {
            console.log(`Client not found.`);
        }
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('identify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleIdentify", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('chatToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessage", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: '/chat' })
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map