'use client';
import { toast } from 'react-toastify';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const router = useRouter();

  let username = '';
  let password = '';
  const handleUserName = (e: any) => {
    const { name, value } = e.target;
    if (name === 'username') username = value;
    else password = value;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const apiUrl = `http://localhost:3333/check?username=${username}&password=${password}`;
    const res = await fetch(apiUrl);
    const result = await res.json();
    if (result) {
      router.push(`/chatPage?username=${username}`);
    } else {
      toast.error('error', {});
    }
  };

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
