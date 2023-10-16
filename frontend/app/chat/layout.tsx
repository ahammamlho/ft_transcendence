import React from 'react';
import NavBarChat from './NavBar';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { GlobalContextProvider } from './Context/store';
const LayoutChat = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBarChat user={session?.user} />
      <GlobalContextProvider> {children}</GlobalContextProvider>
    </div>
  );
};

export default LayoutChat;
