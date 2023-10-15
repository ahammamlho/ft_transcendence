'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import classnames from 'classnames';
import { Avatar } from '@radix-ui/themes';
interface Props {
  user?: userDto;
}
const NavBar = ({ user }: Props) => {
  const currentPath = usePathname();
  const links = [
    {
      label: 'chat',
      href: '/chat',
    },
    {
      label: 'requist friends',
      href: '/requist',
    },
    {
      label: 'Sign out',
      href: '/api/auth/signout',
    },
  ];

  return (
    <nav className="flex space-x-5 border-b mb-5 px-5 h-16 items-center justify-end">
      <div className="flex items-center space-x-2">
        <Avatar size="2" src={user?.avatar} fallback="A" />
        <h1>{user?.name}</h1>
      </div>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              ' text-zinc-500': link.href !== currentPath,
              ' hover:text-zinc-900': link.href === currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
