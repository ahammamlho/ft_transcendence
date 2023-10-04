'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import ListMsgs from '../partListMsg/listMsg';
import { useState } from 'react';
import { useEffect } from 'react';
import io from 'Socket.IO-client';

type data = { users: any; session: any };
export default function ListFriends({ session, users }: data) {
  const [geust, setGeust] = useState(users[0]);
  const user = session.user;
  const profile = users.map((map: any, index: number) => {
    return user.id != map.id ? (
      <button
        className={styles.divProfile}
        key={map.id}
        onClick={() => {
          console.log(map.name);
        }}
        style={{
          border: 'none',
          background: 'none',
        }}
      >
        <Image
          className={styles.imgProfile}
          src={map['avatar']}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <div className={styles.userInfo}>
          <h5 className={styles.nameUser}>{map['name']}</h5>
          <p className={styles.timeLastmsg}>4m</p>
        </div>
      </button>
    ) : (
      <div key={map.id}></div>
    );
  });

  let socket;
  useEffect(() => {
    const socketInitializer = async () => {
      // if (typeof window !== 'undefined') {
      socket = io('http://localhost:3333', {
        transports: ['websocket'],
      });

      socket.on('connect', () => {
        console.log('connected');
      });
      // }
    };
    socketInitializer();
  }, []);

  return (
    <>
      <div className={styles.listFriends}>
        <div className={styles.topList}>
          <h2 className={styles.chatText}>CHAT</h2>
          <h3 className={styles.addChanls}>+</h3>
        </div>

        <div className={styles.container}>{profile}</div>
      </div>
      <ListMsgs props={geust} />
    </>
  );
}
