'use client';
import './globals.css';
import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import { SessionProviders } from './components/Providers';
import store from './chatPage/store/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProviders>
        <Provider store={store}>
          <body className={inter.className}>{children}</body>
        </Provider>
      </SessionProviders>
    </html>
  );
}
