import NavBarProtected from '../components/navBar/NavBarProtected';
import BoxChat from './components/BoxChat';
import ListUser from './components/ListUser';

export default function Layout(prompt: { children: React.ReactNode }) {
  return <NavBarProtected>
    <div className="flex justify-center items-center text-black h-[100%]  ">
      <ListUser />
      <BoxChat />
    </div>
    {prompt.children}</NavBarProtected>;
}
