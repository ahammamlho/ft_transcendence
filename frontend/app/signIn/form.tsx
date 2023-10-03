'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from '../signup/styles.module.css';
import { Backend_URL } from '../lib/constants';
import { ChangeEvent, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get('callbackUrl') || ;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setFormValues({ email: '', password: '' });
      console.log('Before signIn:', formValues);
      const res = await signIn('credentials', {
        username: formValues.email,
        password: formValues.password,
        redirect: true,
        callbackUrl: '/chatPage',
      });
      console.log('After signIn:', res);
      if (res?.error === null) {
        console.log('callback calld');
      } else {
        console.log(formValues);
      }
    } catch (error: any) {
      console.error('Error signing in:', error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              className={styles.inputText}
              placeholder="Enter password"
              value={formValues.password}
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
      </div>
    </main>
  );
}
