"use client"
import React, { useEffect } from 'react';
import { Avatar, Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import { AiFillPlusSquare } from "react-icons/ai";
import { useGlobalContext } from '../Context/store';
import { socketInitializer } from '../api/init-socket';


interface Props {
  users: userDto[],
  user: userDto,
}


const ListUser = ({ users, user }: Props) => {

  const { setGeust, setUser } = useGlobalContext();

  useEffect(() => {
    setUser(user);
    socketInitializer(user);
  }, [])
  const userWidget = users.map((el, index) => {
    return <Flex align="center" className='relative mt-0 border-b py-2 ' key={index}
      onClick={() => {
        setGeust(el);
      }}>
      <Avatar
        size="2"
        src={el.avatar}
        radius="full"
        fallback="T"
      />
      <Text as="div" size="1" weight="bold" className='pl-1'>
        {el.name}
      </Text>
      <Text as="div" size="1" className='absolute bottom-0 right-0'>
        10.25
      </Text>
    </Flex>

  })
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
