
import React from 'react'
import NavigationSettings from './components/Navigation'
import ListItem from './components/ListItem'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const PageSettings = async () => {

    return (
        <div className='flex flex-col items-center'>
            <NavigationSettings />
            <ListItem />
        </div>
    )
}

export default PageSettings
