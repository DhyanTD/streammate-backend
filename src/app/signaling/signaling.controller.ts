import { Server, Socket } from 'socket.io';
import http from 'http';

export const initSignalingServer = (server: http.Server) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket: Socket) => {
        console.log('a user connected: ', socket.id);

        socket.on('disconnect', () => {
            console.log('user disconnected: ', socket.id);
        });

        socket.on('join-room', (roomId: string, userId: string) => {
            socket.join(roomId);
            socket.to(roomId).emit('user-connected', userId);

            socket.on('offer', (offer) => {
                socket.to(roomId).emit('offer', offer);
            });

            socket.on('answer', (answer) => {
                socket.to(roomId).emit('answer', answer);
            });

            socket.on('ice-candidate', (candidate) => {
                socket.to(roomId).emit('ice-candidate', candidate);
            });

            socket.on('leave-room', () => {
                socket.leave(roomId);
                socket.to(roomId).emit('user-disconnected', userId);
            });
        });
    });
};
