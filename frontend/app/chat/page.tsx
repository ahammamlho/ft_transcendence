
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getUserForMsg } from './api/fetch-users';
import BoxChat from './components/BoxChat';
import ListUser from './components/ListUser';
// temp
const PageChat = async () => {
  const session = await getServerSession(authOptions);
  if (!session)
    return <p>temp</p>
  return (
    <div className="flex justify-center items-center">
      <ListUser user={session?.user} />
      <BoxChat />
    </div>
  );
};

export default PageChat;
