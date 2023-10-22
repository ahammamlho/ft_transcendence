"use client"
import Box from '@mui/material/Box';
import { Avatar, Flex, ScrollArea, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { AiFillPlusSquare } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { useGlobalContext } from '../Context/store';
import { getUserForMsg } from '../api/fetch-users';
import { socket, socketInitializer } from '../api/init-socket';
import { extractHoursAndM } from './widgetMsg';

export function getColorStatus(status: any): string {
  if (status === "ACTIF") {
    return 'green';
  } else if (status === "INACTIF") {
    return 'red';
  }
  return 'blue';
}

const ListUser = ({ user }: { user: userDto }) => {

  const { setGeust, setUser, geust } = useGlobalContext();

  const [users, setUsers] = useState<userDto[]>([])
  const [lastMsgs, setLastMsgs] = useState<msgDto[]>([])



  useEffect(() => {
    setUser(user);
    socketInitializer(user);
    const getListUsers = async () => {
      const usersList = await getUserForMsg(user.id);
      setUsers(usersList.usersMsgList);
      setLastMsgs(usersList.lastMsgs);
    };
    getListUsers();
    socket.on("findMsg2UsersResponse", getListUsers);
    socket.on("updateData", getListUsers);
  }, [])

  useEffect(() => {
    if (geust.id === -1 && users.length !== 0) {
      setGeust(users[0]);
    }
  }, [users])

  const userWidget = (users.length != 0) ? users.map((el, index) => {
    return <Flex align="center" className='relative mt-0 border-b py-2' key={index}
      style={{
        background: (el.id === geust.id) ? "#e9ecef" : 'white'
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
        <Text className='text-neutral-500 text-sm w-24 line-clamp-1 overflow-hidden' >
          {lastMsgs[index].content}
        </Text>
      </Flex>
      <Text size="1" className='absolute bottom-0 right-4'>
        {extractHoursAndM(lastMsgs[index].createdAt)}
      </Text>
      {
        (el.id === geust.id) ? <Box sx={{
          width: 5,
          height: 30,
          backgroundColor: 'blue',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10
        }}
          className='absolute right-2'>
        </Box> : <div></div>
      }
    </Flex>

  }) : <Text className="flex border-b justify-center">pas user</Text>

  return (
    <Box style={{ width: 200, height: 500, padding: 2, borderRadius: 10, background: "white" }}>

      <div className="flex border-b items-center justify-between pl-2 pr-2" >
        <Text size='6'>Chat</Text>
        <AiFillPlusSquare style={{ color: 'blue', fontSize: '40px', borderRadius: '20px', }} />
      </div >

      <ScrollArea type="always" scrollbars="vertical" style={{ height: 450 }}>
        <Box p="1" pr="3">
          <Flex direction="column" >
            {userWidget}
          </Flex>
        </Box>
      </ScrollArea>


    </Box>
  );
};

export default ListUser;
