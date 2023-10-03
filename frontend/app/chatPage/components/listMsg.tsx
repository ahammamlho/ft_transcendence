'use client';
import { useState } from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

export default function ListMsgs() {
  const [msg, setMsg] = useState('');
  const input = document.getElementById(styles.input);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(msg);
    setMsg('');
  };

  const onMessageChange = (e: any) => {
    setMsg(e.target.value);
    console.log(msg);
  };
  return (
    <div className={styles.partMessage}>
      <div className={styles.listMessage}>
        <h1>asfiodsfjsgjdskldslkvjdsklvjdsjkl</h1>
      </div>
      <form className={styles.Wrapper} onSubmit={handleSubmit}>
        <input
          className={styles.InputText}
          onChange={onMessageChange}
          type="text"
          id="input"
          placeholder="Type your message"
        />
        <Image
          className={styles.ImageSendMsg}
          src="/images/sendMsgIcon.png"
          alt=""
          width="30"
          height="30"
        />
      </form>
    </div>
  );
}
