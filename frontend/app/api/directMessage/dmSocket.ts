import { io, Socket } from 'Socket.IO-client';
export let ourSocket: Socket;

export const socketInitializer = async (user: any) => {
  ourSocket = io('http://localhost:3333', {
    transports: ['websocket'],
    query: {
      senderId: user.id,
    },
  });
  ourSocket.on('connect', () => {});
};

export const emitMessage = (event: string, message: any) => {
  ourSocket.emit(event, message);
};
