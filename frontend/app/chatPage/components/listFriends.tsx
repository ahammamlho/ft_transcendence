// 'use client';

import styles from '../styles.module.css';
import Image from 'next/image';

export default async function ListFriends({ params }: any) {
  const apiUrl = `http://localhost:3333/allUsers`;
  const res = await fetch(apiUrl, {
    next: {
      revalidate: 1,
    },
  });
  const result = await res.json();
  let users = result;
  console.log(params);
  const profile = users.map((map: any) => {
    return params !== map['name'] ? (
      <div className={styles.divProfile}>
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
      </div>
    ) : (
      <div></div>
    );
  });

  return (
    <div className={styles.listFriends}>
      <div className={styles.topList}>
        <h2 className={styles.chatText}>CHAT</h2>
        <h2 className={styles.addChanls}>+</h2>
      </div>

      <div className={styles.container}>{profile}</div>
    </div>
  );
}
