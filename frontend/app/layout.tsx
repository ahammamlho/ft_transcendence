'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProviders } from './components/Providers';
import { ReduxProvider } from './chatPage/store/provider-redux';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProviders>
        <body className={inter.className}>
          <ReduxProvider> {children}</ReduxProvider>
        </body>
      </SessionProviders>
    </html>
  );
}
