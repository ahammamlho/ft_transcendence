"use client"
import Box from '@mui/material/Box';
import { Avatar, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { useGlobalContext } from '../Context/store';
import { getUserForMsg } from '../api/fetch-users';
import { socket, socketInitializer } from '../api/init-socket';
import { extractHoursAndM } from './widgetMsg';
import { useSession } from 'next-auth/react';
import AlertDialogSlide from './dialogAdd';

export function getColorStatus(status: any): string {
  if (status === "ACTIF") {
    return '#30f32d';
  } else if (status === "INACTIF") {
    return 'red';
  }
  return 'blue';
}

const ListUser = () => {
  const { data: session } = useSession();
  const { setGeust, setUser, geust } = useGlobalContext();
  const [users, setUsers] = useState<userDto[]>([])
  const [lastMsgs, setLastMsgs] = useState<msgDto[]>([])



  useEffect(() => {
    if (session) {
      const user: userDto = session.user;
      setUser(session.user);
      socketInitializer(user);
      const getListUsers = async () => {
        const usersList = await getUserForMsg(user.id);
        setUsers(usersList.usersMsgList);
        setLastMsgs(usersList.lastMsgs);
      };
      getListUsers();
      socket.on("findMsg2UsersResponse", getListUsers);
      socket.on("updateData", getListUsers);
    }
  }, [session])

  useEffect(() => {
    if (geust.id === -1 && users.length !== 0) {
      setGeust(users[0]);
    }
  }, [users])

  const userWidget = (users.length != 0) ? users.map((el, index) => {
    return <Flex align="center" className='relative border-b py-2 pl-1' key={index}
      style={{
        background: (el.id === geust.id) ? "#f1f3f9" : 'white'
      }}
      onClick={() => {
        setGeust(el);
      }}>
      <Avatar
        size="3"
        src={el.avatar}
        radius="full"
        fallback="T"
      />
      <div className='absolute pt-6 pl-7'>
        <GoDotFill size={20} color={getColorStatus(el.status)} />
      </div>
      <Flex direction="column" className='items-start pl-2'>
        <Text size="2" weight="bold" className=''>
          {el.name}
        </Text>
        <Text className='text-neutral-500 text-sm w-32 line-clamp-1 overflow-hidden' >
          {lastMsgs[index].content}
        </Text>
      </Flex>
      <Text size="1" className='absolute bottom-0 right-4'>
        {extractHoursAndM(lastMsgs[index].createdAt)}
      </Text>
      {
        (el.id === geust.id) ? <Box sx={{
          width: 6,
          height: 40,
          backgroundColor: 'blue',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10
        }}
          className='absolute right-0'>
        </Box> : <div></div>
      }
    </Flex>

  }) : <Text className="flex border-b justify-center">pas user</Text>

  return (
    <Box style={{ width: 250, height: 600, borderRadius: 10, background: "white" }}>

      <div className="flex border-b items-center justify-between pl-2 pr-2 py-3" >
        <Text size='6' weight="bold">CHAT</Text>
        <TbSquareRoundedPlusFilled style={{ color: 'blue', fontSize: '40px' }} />
      </div >

      <AlertDialogSlide />

      <div className="flex items-center justify-around bg-[#f6f7fa] m-5 p-1 rounded-lg border-b" >
        <div className='px-2 py-1 my-2 rounded-[12px] text-[#3055d8] bg-white shadow-md'>
          <Text size='2' weight="bold">DIRECT</Text>
        </div>
        <Text size='2' weight="bold">CHANNLES</Text>
      </div >

      <ScrollArea scrollbars="vertical" style={{ height: 430 }}>
        <Box>
          <Flex direction="column" >
            {userWidget}
          </Flex>
        </Box>
      </ScrollArea>


    </Box>
  );
};

export default ListUser;