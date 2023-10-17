"use client"
import React, { use, useEffect, useState } from 'react';
import { Avatar, Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import { AiFillMessage } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { useGlobalContext } from '../../Context/store';
import sendRequistFriend from '../../api/send-Friend-req';
import { getAllUsers, getRequistFriends } from '../../api/fetch-users';



const ListItem = () => {
    const { user, valueNav } = useGlobalContext();
    const [items, setItems] = useState<userDto[]>([]);


    useEffect(() => {
        async function getData() {
            if (valueNav === 0) {
                const users = await getAllUsers(`fsfsd`);
                console.log("users", users);
                setItems(users);
            }
            else if (valueNav === 1) {
                const requistFr = await getRequistFriends(user.id);
                setItems(requistFr);
            } else {
                setItems([]);
            }

        }
        getData();
        console.log(valueNav);
        console.log(items);
    }, [valueNav]);

    const itemWidget = items.map((itm, index) => {
        return <Box p="1" pr="3" key={index}>
            <Flex align="center" justify="between" className='border-b py-2'>
                <div className='flex items-center '>
                    <Avatar
                        size="2"
                        src={itm.avatar}
                        radius="full"
                        fallback="T"
                    />
                    <Text as="div" size="2" weight="bold" className='pl-2'>
                        {itm.name}
                    </Text></div>
                <div className='flex items-center'>
                    <BsPersonFillAdd size='20' style={{ marginRight: 10 }} onClick={async () => {
                        await sendRequistFriend(user.id, itm.id);
                        console.log('clicked');
                    }} />
                    <AiFillMessage size='20' />
                </div>
            </Flex>
        </Box>
    })
    return (
        <Box style={{ width: 250, height: 500, padding: 2, marginTop: 20, borderRadius: 5, background: "white" }}>



            <ScrollArea type="always" scrollbars="vertical" style={{ height: 450 }}>
                {itemWidget}
            </ScrollArea>


        </Box>
    )
}

export default ListItem
