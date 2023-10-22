'use client';
import { toast } from 'react-toastify';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();

  const handleUserName = (e: any) => { };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  const { data: session } = useSession();
  if (session && session.user) {
    router.push(`/chat?username=aklsj`);
  }
  return (
    <main className={styles.main}>
      <ToastContainer />
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className={styles.inputText}
            placeholder="Enter userName"
            required
            onChange={handleUserName}
          />
          <input
            type="text"
            name="password"
            className={styles.inputText}
            placeholder="Enter passWord"
            required
            onChange={handleUserName}
          />
          <input type="submit" value="Enter" className={styles.button} />
        </form>
      </div>
    </main>
  );
}
