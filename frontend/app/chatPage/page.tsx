import Link from 'next/link';
import styles from './styles.module.css';

export default async function ChatPage() {
  return (
    <div className={styles.main}>
      {/* <ListFriends params={username} /> */}
      {/* <ListMsgs /> */}
      <Link
        href="/api/auth/signout"
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'end',
          paddingTop: '10px',
        }}
      >
        Sign out
      </Link>
    </div>
  );
}
