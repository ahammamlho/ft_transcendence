'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { io, Socket } from 'Socket.IO-client';
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
      socket.emit('findMsg2Users', {
        content: '',
        senderId: user.id,
        receivedId: geust.id,
      });
      socket.on('findMsg2UsersResponse', (response) => {
        setAllMessage(response);
      });
    };
    socketInitializer();
  }, []);

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
    return (
      <div key={elm.id} className={styles.sendMsgRight}>
        {elm.content}
      </div>
    );
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

      <div className={styles.msgsInbox}>
        <div className={styles.chats}>
          <Image
            className={styles.imgProfile}
            src={user.avatar}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <div>
            <div>{geust.name}</div>
            <div className={styles.message}>
              jgkdjsgkjgkdjsgkjgkdjsgkjgkdjsgkjgkdjsgkjgkdjsgkjgkdjsgkjgkdjsgk
            </div>
          </div>
        </div>
      </div>

      <div className={styles.msgBotton}>
        <div className={styles.inputGroup} onSubmit={handleSubmit}>
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
        </div>
      </div>
    </div>
  );
}
