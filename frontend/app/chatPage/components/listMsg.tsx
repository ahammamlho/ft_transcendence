// 'use client';
import { useState } from 'react';
import styles from '../styles.module.css';
import Image from 'next/image';

export default function ListMsgs() {
  const [msg, setMsg] = useState('');
  const input = document.getElementById(styles.input);
  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // console.log(msg);
    // setMsg('');
    // input.value = '';
  };
  console.log(input);
  const onMessageChange = (e: any) => {
    // setMsg(e.target.value);
  };
  return (
    <div className={styles.listMessage}>
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
