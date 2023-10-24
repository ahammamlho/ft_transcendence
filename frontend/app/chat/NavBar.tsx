'use client';
import { Avatar, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { AiFillMessage, AiFillSetting } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { getColorStatus } from './components/ListUser';
import { useGlobalContext } from './Context/store';
import { useEffect } from 'react';


const NavBar = () => {

  const { user } = useGlobalContext();

  return (
    <nav className="flex  border-b mb-5 px-5 h-16 items-center justify-between">
      <div className="flex items-center space-x-2">
        <Avatar size="3"
          src={user?.avatar}
          radius="full"
          fallback="A" onClick={() => { console.log(user) }} />
        <div className='absolute pt-6 pl-5'>
          <GoDotFill size={20} color={getColorStatus('ACTIF')} />
        </div>
        <Text size="3" weight="bold" className='text-white pl-2'>
          {user?.name}
        </Text>
      </div>

      <div className='flex  space-x-5'>
        <AiFillMessage style={{ color: 'white', fontSize: '20px' }} />
        <Link href="/chat/settings">
          <AiFillSetting style={{ color: 'white', fontSize: '20px' }} />
        </Link>
        <Link href="/api/auth/signout">
          <FaSignOutAlt style={{ color: 'white', fontSize: '20px' }} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
