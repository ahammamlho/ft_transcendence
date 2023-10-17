'use client';
import { useGlobalContext } from '../../Context/store';
import { useState } from 'react';
import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';


const NavigationSettings = () => {
    const [value, setValue] = useState(0);
    const { setValueNav } = useGlobalContext();
    return (
        <div>
            <BottomNavigation

                style={{ width: '300px', borderRadius: 10 }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setValueNav(newValue);
                }}
            >
                <BottomNavigationAction label="Users" icon={<BiSolidUserDetail />} />
                <BottomNavigationAction label="Requist" icon={<BiSolidUserDetail />} />
                <BottomNavigationAction label="Friends" icon={<FaUserFriends />} />
                <BottomNavigationAction label="Ban" icon={<TbFriendsOff />} />
            </BottomNavigation>
        </div>
    )
}

export default NavigationSettings
