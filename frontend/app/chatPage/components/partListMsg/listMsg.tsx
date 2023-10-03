'use client';
import LongMenu from '../kebabMenu/kabab';
import styles from './styles.module.css';
import Image from 'next/image';

export default function ListMsgs({ props }: any) {
  let msg = '';
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(msg);
    msg = '';
  };

  const onMessageChange = (e: any) => {
    msg = e.target.value;
    console.log(msg);
  };
  return (
    <div className={styles.partMessage}>
      <div className={styles.topProfile}>
        <div className={styles.topProfile}>
          <Image
            className={styles.imgProfile}
            style={{ paddingLeft: '5px' }}
            src={props.avatar}
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <div>{props.name}</div>
        </div>
        <LongMenu />
      </div>

      <div style={{ width: '95%' }}>
        <div className={styles.msgList}>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
          <div className={styles.sendMsgRight}>fafadsfadsfasdfjalsfskll</div>
        </div>
        <form className={styles.formSendMsg} onSubmit={handleSubmit}>
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
    </div>
  );
}
