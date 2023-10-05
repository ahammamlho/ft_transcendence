import styles from '../styles.module.css';
import Image from 'next/image';

export default function MessageLeft({ geust, message }: any) {
  return (
    <div className={styles.chats}>
      <Image
        src={geust.avatar}
        className={styles.imgProfile}
        alt="Picture of the author"
        width={30}
        height={30}
      />
      <div>
        <div className={styles.nameUser}>{geust.name}</div>
        <div className={styles.messageInfo}>
          <div className={styles.message}>${message.content}</div>
          <div className={styles.timeSend}> 10.25 </div>
        </div>
      </div>
    </div>
  );
}
