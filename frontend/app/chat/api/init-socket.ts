import { io, Socket } from 'Socket.IO-client';
export let socket: Socket;

export const socketInitializer = async (user: userDto) => {
    socket = io('http://localhost:3333', {
        transports: ['websocket'],
        query: {
            senderId: user.id,
        },
    });
    socket.on('connect', () => {
        console.log('a user connected --------->');
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
};

export const emitMessage = (event: string, message: any) => {
    socket.emit(event, message);
};