'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import ListMsgs from '../partListMsg/listMsg';
import { useEffect, useState } from 'react';

type data = { users: any; session: any };
export default function ListFriends({ session, users }: data) {
  const [geust, setGeust] = useState(users[0]);
  const user = session.user;

  useEffect(() => {
    if (users[0].id == user.id) {
      setGeust(users[1]);
    }
  }, []);

  const profile = users.map((map: any, index: number) => {
    return user.id != map.id ? (
      <button
        className={styles.divProfile}
        key={map.id}
        onClick={() => {
          setGeust(users[index]);
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
          width={40}
          height={40}
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
  return (
    <>
      <div className={styles.listFriends}>
        <div className={styles.topList}>
          <h2 className={styles.chatText}>CHAT</h2>
          <h3 className={styles.addChanls}>+</h3>
        </div>

        <div className={styles.container}>{profile}</div>
      </div>
      <ListMsgs geust={geust} user={user} />
    </>
  );
}
