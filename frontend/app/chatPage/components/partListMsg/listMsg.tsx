'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import MessageLeft from './components/messageLeft';
import MessageRight from './components/messageRight';
import {
  emitMessage,
  ourSocket,
  socketInitializer,
} from '@/app/api/directMessage/dmSocket';
import TypographyMenu from './components/dropMenu';
import LongMenu from './components/dropMenu';

type data = { geust: any; user: any; setGeust: (data: any) => void };
export default function ListMsgs({ geust, user, setGeust }: data) {
  const [msg, setMessage] = useState('');
  const [Allmsg, setAllMessage] = useState<msgDbdto[]>([]);
  const [respo, setRespo] = useState<msgDbdto>();

  const scrollableRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  }, [Allmsg]);

  useEffect(() => {
    console.log('udd');
    function getData() {
      axios
        .get(`http://localhost:3333/messages/${geust.id}/${user.id}`)
        .then(({ data }) => {
          setAllMessage(data);
        });
    }
    if (geust.id) getData();
    socketInitializer(user);
  }, [geust]);

  useEffect(() => {
    function onRec({ msgUser }: any) {
      setRespo(msgUser);
    }
    if (ourSocket) {
      if (geust.id != undefined) {
        ourSocket.on('findMsg2UsersResponse', onRec);
      }
    }
    return () => {
      ourSocket.off('findMsg2UsersResponse', onRec);
    };
  }, [ourSocket]);

  useEffect(() => {
    if (respo && geust.id == respo?.senderId) {
      setAllMessage((msg) => [...msg, respo]);
    }
  }, [respo]);
  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMsgToServer();
  };

  const sendMsgToServer = () => {
    if (msg.trim() != '') {
      emitMessage('createMessage', {
        content: msg.trim(),
        senderId: user.id,
        receivedId: geust.id,
      });

      let newMsg = {
        id: 20,
        content: msg.trim(),
        date: 5,
        senderId: user.id,
        receivedId: geust.id,
      };
      setAllMessage((msg) => [...msg, newMsg]);
    }
    setMessage('');
  };

  const msgAllTag = Allmsg.map((elm: msgDbdto, index: number) => {
    const tag =
      elm.senderId == user.id ? (
        <MessageRight message={elm} key={index} />
      ) : (
        <MessageLeft geust={geust} message={elm} key={index} />
      );
    return tag;
  });
  return geust && geust.id != undefined ? (
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
        <LongMenu />
      </div>

      <div className={styles.msgsInbox} ref={scrollableRef} id="scrollableDiv">
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
  ) : (
    <div></div>
  );
}
