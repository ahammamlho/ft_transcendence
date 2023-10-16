import React from 'react';
import { Box, Container, Flex } from '@radix-ui/themes';
import ListUser from './components/ListUser';
import BoxChat from './components/BoxChat';
const PageChat = () => {
  return (
    <div className="flex justify-center items-center">
      <ListUser />
      <BoxChat />
    </div>
  );
};

export default PageChat;
