'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import { FcCancel } from 'react-icons/fc';
import { MdFileDownloadDone } from 'react-icons/md';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getRequistFriends from '../../fetch/fetch-requsetFriends';

export default async function listRequistFriends() {
  const session = await getServerSession(authOptions);
  let allRequst: any;
  if (session) {
    allRequst = await getRequistFriends(session?.user.id);
  }
  const requist = allRequst.map((user: any, index: any) => {
    return (
      <div className={styles.divProfile}>
        <Image
          className={styles.imgProfile}
          src="https://randomuser.me/api/portraits/women/96.jpg"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <h5 className={styles.nameUser}> name user</h5>

        <div className={styles.twoButton}>
          <button className={styles.button} onClick={() => {}}>
            <FcCancel size={20} color="red" />
          </button>
          <button className={styles.button} onClick={() => {}}>
            <MdFileDownloadDone size={20} color="green" />
          </button>
        </div>
      </div>
    );
  });
  return <div className={styles.container}>{requist}</div>;
}
