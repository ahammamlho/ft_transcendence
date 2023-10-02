'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';
import { Backend_URL } from '../lib/constants';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, email, password } = formData;

    const res = await fetch(Backend_URL + 'auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        avatar: 'avatar',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert('user Registred');
    console.log({ response });
  };
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className={styles.inputText}
              placeholder="Enter username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              className={styles.inputText}
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              className={styles.inputText}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input type="submit" value="Enter" className={styles.button} />
          </form>
        </div>
        <Link
          href="/"
          style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'end',
            paddingTop: '10px',
          }}
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
