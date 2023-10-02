import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

type Props = {
  children: React.ReactNode;
};

export default async function ChatLayout(props: Props) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      fasdjkadsghjahsdgjkhaksghajksdghkl
      {props.children}
    </div>
  );
}
