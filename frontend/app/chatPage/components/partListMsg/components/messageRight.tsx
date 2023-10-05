import styles from '../styles.module.css';
import Image from 'next/image';

export default function MessageRight({ message }: any) {
  return (
    <div className={styles.chatsRight}>
      <div className={styles.messageInfoRight}>
        <p className={styles.messageRight}>{message.content}</p>
        <div className={styles.timeSend}> 10.25 </div>
      </div>
    </div>
  );
}
