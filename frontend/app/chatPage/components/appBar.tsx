// 'use client';
import { useState } from 'react';
import styles from './../styles.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function AppBar() {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.mainLayout}>
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
