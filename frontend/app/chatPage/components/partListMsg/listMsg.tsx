'use client';
import LongMenu from '../kebabMenu/kabab';
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
      });
      socket.on('connect', () => {});

      socket.emit('findMsg2Users', {
        content: '',
        senderId: user.id,
        receivedId: geust.id,
      });
      socket.on('findMsg2UsersResponse', (response) => {
        console.log('------------------------------------------------------');
        console.log(response);
      });
    };
    socketInitializer();
  }, []);

  const sendMsgToServer = () => {
    if (msg != '') {
      console.log('msg sended');
      socket?.emit('createMessage', {
        content: msg,
        senderId: user.id,
        receivedId: geust.id,
      });
    }

    setMessage('');
  };

  return (
    <div className={styles.partMessage}>
      <div className={styles.topProfile}>
        <div className={styles.topProfile}>
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
        <LongMenu />
      </div>
      <div style={{ width: '95%' }}>
        <div className={styles.msgList}>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
        </div>
        <form className={styles.formSendMsg} onSubmit={handleSubmit}>
          <input
            className={styles.InputText}
            onChange={onMessageChange}
            type="text"
            id="input"
            value={msg}
            placeholder="Type your message"
          />
          <button>
            <Image
              onClick={() => sendMsgToServer()}
              className={styles.ImageSendMsg}
              src="/images/sendMsgIcon.png"
              alt=""
              width="30"
              height="30"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
