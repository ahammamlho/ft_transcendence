import React from 'react';
import NavBarChat from './NavBar';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const LayoutChat = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavBarChat user={session?.user} />
      {children}
    </div>
  );
};

export default LayoutChat;
