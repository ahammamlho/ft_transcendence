import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AppBar from './components/appBar';
type Props = {
  children: React.ReactNode;
};

export default async function ChatLayout(props: Props) {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <AppBar />
      {props.children}
    </div>
  );
}
