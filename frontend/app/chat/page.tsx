
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getAllUsers } from './api/fetch-users';
import BoxChat from './components/BoxChat';
import ListUser from './components/ListUser';

const PageChat = async () => {
  const session = await getServerSession(authOptions);
  const users = await getAllUsers(
    `Bearer ${session?.backendTokens.accessToken}`,
  );
  if (!session)
    return <p>temp</p>
  return (
    <div className="flex justify-center items-center">
      <ListUser users={users} user={session?.user} />
      <BoxChat />
    </div>
  );
};

export default PageChat;
