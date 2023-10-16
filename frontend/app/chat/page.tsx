
import React, { useEffect } from 'react';
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
  let geustt: userDto = users[0]


  return (
    <div className="flex justify-center items-center">
      <ListUser users={users} />
      <BoxChat />
    </div>
  );
};

export default PageChat;
