'use client';

// import React, { useEffect } from 'react';
import styles from './styles.module.css';
import ListFriends from './components/listFriends';
import ListMsgs from './components/listMsg';
import { useSearchParams } from 'next/navigation';

export default function ChatPage() {
  const searchParams = useSearchParams();

  const username = searchParams.get('username');
  return (
    <div className={styles.main}>
      <ListFriends params={username} />
      <ListMsgs />
    </div>
  );
}
