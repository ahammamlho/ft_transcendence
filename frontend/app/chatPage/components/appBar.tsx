import styles from './styles.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getRequistFriends from '../fetch/fetch-requsetFriends';
import { useEffect } from 'react';

export default async function AppBar() {
  const session = await getServerSession(authOptions);
  let allRequst: any;
  if (session) {
    allRequst = await getRequistFriends(session?.user.id);
  }

  return (
    <div className={styles.mainLayout}>
      <Link
        className={styles.requistFrd}
        href="/chatPage/components/requestFriends"
      >
        {allRequst.length} requist friends
      </Link>
      <span>{session?.user.name}</span>
      <Link
        href="/api/auth/signout"
        style={{
          color: 'white',
          paddingLeft: '10px',
        }}
      >
        Sign out
      </Link>
    </div>
  );
}
