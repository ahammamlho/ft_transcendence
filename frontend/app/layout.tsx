'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './components/Providers';
import '@radix-ui/themes/styles.css';
import { Container, Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=' bg-[#151b2d]'>
      <Providers>
        <body className={inter.className}>
          <Theme className=' bg-[#151b2d]'>
            {children}
          </Theme>
        </body>
      </Providers>
    </html>
  );
}
