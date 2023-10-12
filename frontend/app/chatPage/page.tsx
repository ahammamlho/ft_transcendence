// 'use client';
import styles from './styles.module.css';
import ListFriends from './components/partListFriends/listFriends';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Backend_URL } from '../lib/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAllUsers from './fetch/fetch-users';

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  const users = await getAllUsers(
    `Bearer ${session?.backendTokens.accessToken}`,
  );
  return (
    <div className={styles.main}>
      <ListFriends session={session} users={users} />
    </div>
  );
}
