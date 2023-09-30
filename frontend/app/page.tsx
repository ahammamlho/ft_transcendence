import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-start">
      <Link href="/logingPage" replace>
        <button className="btn-started">Get Started</button>
      </Link>
    </main>
  );
}
