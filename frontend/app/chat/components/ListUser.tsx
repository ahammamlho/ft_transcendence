import React from 'react';
import { ScrollArea, Avatar, Flex, Box, Text, Heading } from '@radix-ui/themes';
import { AiFillPlusSquare } from "react-icons/ai";



const ListUser = () => {

  const users = [1, 2, 3, 4, 1, 2];
  const userWidget = users.map((tr, index) => {
    return <Flex align="center" className='relative mt-0 border-b py-2 ' key={index}>
      <Avatar
        size="2"
        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
        radius="full"
        fallback="T"
      />
      <Text as="div" size="1" weight="bold" className='pl-1'>
        Teodros Girmay
      </Text>
      <Text as="div" size="1" className='absolute bottom-0 right-0'>
        10.25
      </Text>
    </Flex>

  })
  return (
    <Box style={{ width: 200, height: 500, padding: 2, borderRadius: 10, background: "white" }}>

      <div className="flex border-b items-center justify-between pl-2 pr-2">
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
