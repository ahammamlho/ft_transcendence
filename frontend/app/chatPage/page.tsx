import React from 'react';
import styles from './styles.module.css';
import ListFriends from './components/listFriends';
import ListMsgs from './components/listMsg';

export default function ChatPage() {
  return (
    <div className={styles.main}>
      <ListFriends />
      <ListMsgs />
    </div>
  );
}
