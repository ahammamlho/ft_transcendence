import React from 'react';
import ListUser from './components/ListUser';
import BoxChat from './components/BoxChat';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getAllUsers from './api/fetchFiends';
const PageChat = async () => {
  const session = await getServerSession(authOptions);
  const users = await getAllUsers(
    `Bearer ${session?.backendTokens.accessToken}`,
  );
  console.log(users)
  let geust: userDto = users[0]
  return (
    <div className="flex justify-center items-center">
      <ListUser users={users} geust={geust} />
      <BoxChat geust={geust} />
    </div>
  );
};

export default PageChat;
