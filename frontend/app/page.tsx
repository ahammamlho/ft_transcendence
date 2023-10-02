'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './signup/styles.module.css';
import { Backend_URL } from './lib/constants';
import { useState } from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

// https://codevoweb.com/nextjs-use-custom-login-and-signup-pages-for-nextauth-js/
// https://medium.com/ascentic-technology/authentication-with-next-js-13-and-next-auth-9c69d55d6bfd

export default function Home() {
  const [formData, setFormData] = useState({
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
    const { email, password } = formData;
    try {
      console.log('Before signIn');
      const res = await signIn('Credentials', {
        email: email,
        password: password,
        // callbackUrl: '/chatPage',
        // redirect: true,
      });
      console.log('After signIn');
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <main className="main-start">
      <div>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
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
          href="/signup"
          style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'end',
            paddingTop: '10px',
          }}
        >
          Sign up
        </Link>
        <Link href="/api/auth/signout">Signout</Link>
        <Link
          href="/api/auth/signout"
          style={{
            color: 'white',
            display: 'flex',
            justifyContent: 'end',
            paddingTop: '10px',
          }}
        >
          Sign out
        </Link>
      </div>
    </main>
  );
}
