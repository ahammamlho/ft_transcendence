// 'use client';

import { Backend_URL } from '@/app/lib/constants';
import styles from '../styles.module.css';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function ListFriends() {
  const session = await getServerSession(authOptions);
  const res = await fetch(Backend_URL + 'user/all', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();
  console.log(result);
  const profile = result.map((map: any) => {
    return session?.user.id != map.id ? (
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
      <></>
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
