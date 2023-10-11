// 'use client';
import styles from './styles.module.css';
import ListFriends from './components/partListFriends/listFriends';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { Backend_URL } from '../lib/constants';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDisppatch, RootState, useAppSelector } from './store/store';

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  const res = await fetch(Backend_URL + 'user/all', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await res.json();
  const username = useAppSelector((state) => state.friendsReducer);
  const dispatch = useDispatch<AppDisppatch>();
  return (
    <div className={styles.main}>
      <ListFriends session={session} users={result} />
    </div>
  );
}
