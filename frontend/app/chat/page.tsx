import React from 'react';
import { Box, Container, Flex } from '@radix-ui/themes';
import ListUser from './components/listUser';
const PageChat = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <Box className="h-96 bg-[#50d71e] rounded-xl">
        <ListUser />
      </Box>
      <Box className=" bg-black  h-96">......................</Box>
    </div>
  );
};

export default PageChat;
