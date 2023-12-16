import BoxChat from './components/BoxChat';
import ListUser from './components/ListUser';

const PageChat = async () => {
  // md: bg-white  h-fit min-h-screen
  return (
    <div className="flex justify-center items-center text-black h-[100%]  ">
      <ListUser />
      <BoxChat />
    </div>
  );
};

export default PageChat;
