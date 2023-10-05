'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { io, Socket } from 'Socket.IO-client';
import MessageLeft from './components/messageLeft';
import MessageRight from './components/messageRight';
let socket: Socket;

type data = { geust: any; user: any };
export default function ListMsgs({ geust, user }: data) {
  const [msg, setMessage] = useState('');
  const [Allmsg, setAllMessage] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMsgToServer();
  };

  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const socketInitializer = async () => {
      socket = io('http://localhost:3333', {
        transports: ['websocket'],
        query: {
          senderId: user.id,
          receivedId: geust.id,
        },
      });
      socket.on('connect', () => {});
      socket.on('findMsg2UsersResponse', (response) => {
        setAllMessage(response);
      });
    };
    socketInitializer();
  }, []);

  useEffect(() => {
    socket?.emit('findMsg2Users', {
      content: '',
      senderId: user.id,
      receivedId: geust.id,
    });
  }, [geust]);
  const sendMsgToServer = () => {
    if (msg != '') {
      socket?.emit('createMessage', {
        content: msg,
        senderId: user.id,
        receivedId: geust.id,
      });
    }
    setMessage('');
  };
  type msgdto = {
    id: number;
    content: string;
    date: number;
    senderId: number;
    receivedId: number;
  };

  const msgAllTag = Allmsg.map((elm: msgdto) => {
    const tag =
      elm.senderId == user.id ? (
        <MessageRight message={elm} key={elm.id} />
      ) : (
        <MessageLeft geust={geust} message={elm} key={elm.id} />
      );
    return tag;
  });
  return (
    <div className={styles.container}>
      <div className={styles.msgHeader}>
        <Image
          className={styles.imgProfile}
          style={{ paddingLeft: '5px' }}
          src={geust.avatar}
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <div>{geust.name}</div>
      </div>

      <div className={styles.msgsInbox}>{msgAllTag}</div>

      <div className={styles.msgBotton}>
        <form className={styles.inputGroup} onSubmit={handleSubmit}>
          <input
            onChange={onMessageChange}
            className={styles.InputText}
            type="text"
            id="input"
            value={msg}
            placeholder="Type your message"
          />
          <Image
            onClick={() => sendMsgToServer()}
            className={styles.ImageSendMsg}
            src="/images/sendMsgIcon.png"
            alt=""
            width="30"
            height="30"
          />
        </form>
      </div>
    </div>
  );
}
