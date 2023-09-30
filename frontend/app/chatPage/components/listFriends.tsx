import styles from '../styles.module.css';
import Image from 'next/image';

export default function ListFriends() {
  const profile = (
    <div className={styles.divProfile}>
      <Image
        className={styles.imgProfile}
        src="https://picsum.photos/id/237/200/300"
        alt="Picture of the author"
        width={50}
        height={50}
      />
      <div className={styles.userInfo}>
        <h5 className={styles.nameUser}>hamza bomahd</h5>
        <p className={styles.timeLastmsg}>4m</p>
      </div>
    </div>
  );
  return (
    <div className={styles.listFriends}>
      <div className={styles.topList}>
        <h2 className={styles.chatText}>CHAT</h2>
        <h2 className={styles.addChanls}>+</h2>
      </div>

      <div className={styles.container}>
        {profile}
        {profile}
        {profile}
        {profile}
        {profile}
      </div>
    </div>
  );
}
