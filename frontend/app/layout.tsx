'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProviders } from './components/Providers';
import '@radix-ui/themes/styles.css';
import { Container, Theme } from '@radix-ui/themes';

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
          <Theme>
            <Container>{children}</Container>
          </Theme>
        </body>
      </SessionProviders>
    </html>
  );
}
