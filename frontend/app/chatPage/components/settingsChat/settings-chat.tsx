'use client';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
export default function SettingsChat() {
  const [text, setText] = useState('');
  const onMessageChange = (e: any) => {
    console.log(e.target.value);
  };

  useEffect(() => {}, [text]);
  return (
    <div className={styles.container}>
      <div className={styles.userSearch}>
        <form className={styles.inputGroup}>
          <input
            onChange={(e) => setText(e.target.value)}
            className={styles.InputText}
            type="text"
            id="input"
            value={text}
            placeholder="Type your message"
          />
        </form>
        <button className={styles.searchButton}>search</button>
      </div>
    </div>
  );
}
