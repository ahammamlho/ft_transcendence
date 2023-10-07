'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import MessageLeft from './components/messageLeft';
import MessageRight from './components/messageRight';
import {
  emitMessage,
  ourSocket,
  socketInitializer,
} from '@/app/api/directMessage/dmSocket';

type data = { geust: any; user: any };
export default function ListMsgs({ geust, user }: data) {
  const [msg, setMessage] = useState('');
  const [Allmsg, setAllMessage] = useState([]);

  useEffect(() => {
    socketInitializer(user);
  }, []);

  useEffect(() => {
    emitMessage('findMsg2Users', {
      content: '',
      senderId: user.id,
      receivedId: geust.id,
    });
    console.log(`-------> ${geust.id}`);
  }, [geust]);

  const listeningToServer = () => {
    ourSocket.on('findMsg2UsersResponse', (response) => {
      if (geust!.id != undefined) {
        if (
          response.senderId == user.id ||
          (response.receivedId == user.id && response.senderId == geust.id)
        ) {
          setAllMessage(response.msgUser);
        } else {
          console.log(
            '*************************************************************',
          );
        }
      }
    });
  };

  setInterval(() => {
    console.log(`-------> ${geust.id}`);
  }, 2000);

  useEffect(() => {
    if (ourSocket) listeningToServer();
  }, [ourSocket]);
  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMsgToServer();
  };

  const sendMsgToServer = () => {
    if (msg != '') {
      emitMessage('createMessage', {
        content: msg,
        senderId: user.id,
        receivedId: geust.id,
      });
    }
    setMessage('');
  };

  const msgAllTag = Allmsg.map((elm: msgDbdto) => {
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
        <div>---- {geust.id}</div>
      </div>

      <div className={styles.msgsInbox} id="scrollableDiv">
        {msgAllTag}
      </div>

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
