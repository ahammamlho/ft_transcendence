'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProviders } from './components/Providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProviders>
        <body className={inter.className}>{children}</body>
      </SessionProviders>
    </html>
  );
}
