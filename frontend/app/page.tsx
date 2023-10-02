'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Change from 'next/'

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log('------------------------------------');
  console.log(session);
  if (session && session.user) {
    // router.push('/chatPage');
    return (
      <main className="main-start">
        <Link href="/api/auth/signout">Signout</Link>
        <h1>----- -----</h1>
        <br />
        <Link href="/chatPage">chat</Link>
      </main>
    );
  } else
    return (
      <main className="main-start">
        <Link href="/api/auth/signin">Sign In</Link>
      </main>
    );
}

// if (!session) {
//   return {
//     redirect: {
//       destination: '/',
//       permanent: false,
//     },
//   }
// }
