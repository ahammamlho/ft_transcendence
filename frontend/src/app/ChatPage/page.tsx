'use client'
import { useEffect, useState } from 'react';
import BoxChat from './components/BoxChat';
import ListUser from './components/ListUser';
import { useGlobalContext } from '../context/store';
import Cookies from 'js-cookie';
import { Socket, io } from 'socket.io-client';

const PageChat = () => {

  const { user } =
    useGlobalContext();

  const [socketChat, setSocketChat] = useState<Socket | null>(null);
  useEffect(() => {
    if (user.id && user.id != '-1') {
      const token = Cookies.get('access_token');
      const socket = io(`${process.env.NEXT_PUBLIC_BACK}/chat` || 'localhost', {
        transports: ['websocket'],
        query: {
          senderId: user.id,
          token: `Bearer ${token}`,
        },
      });
      setSocketChat(socket);
      return () => {
        socket.disconnect();
      };
    }
  }, [user.id]);

  if (socketChat === null) return <>ok</>
  return (
    <div className="flex justify-center items-center text-black h-[100%]  ">
      <ListUser socketChat={socketChat} />
      <BoxChat socketChat={socketChat} />
    </div>
  );
};

export default PageChat;
