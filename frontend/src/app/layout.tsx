'use client';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '../styles/globals.css';
import { GlobalContextProvider } from './context/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` text-white bg-color-main`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
