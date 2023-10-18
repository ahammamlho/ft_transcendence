"use client"
import React, { use, useEffect, useState } from 'react';
import { Avatar, Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import { AiFillMessage } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiUserCheck } from "react-icons/bi";
import { useGlobalContext } from '../../Context/store';
import { getAllUsers, getRecivedRequistFriends, getSendRequistFriends, getFriends, getBlockedUser } from '../../api/fetch-users';
import getIcon from './IconAction';
import { socket } from '../../api/init-socket';



const ListItem = () => {
    const { user, valueNav } = useGlobalContext();
    const [items, setItems] = useState<userDto[]>([]);
    const [nbr, setNbr] = useState(1);
    let users: userDto[] = [];

    const [sendRequist, setSendRequist] = useState<reqFriendsDto[]>([]);
    const [recivedRequistFre, setRecivedRequiFre] = useState<reqFriendsDto[]>([]);
    const [friends, setFriends] = useState<reqFriendsDto[]>([]);
    const [blockedUser, setBlockedUser] = useState<reqFriendsDto[]>([]);

    useEffect(() => {
        async function getData() {
            const allusers = await getAllUsers(`fsfsd`);
            users = allusers.filter((item: userDto) => item.id !== user.id);
            const sendReq = await getSendRequistFriends(user.id);
            setSendRequist(sendReq);
            const recivReq = await getRecivedRequistFriends(user.id);
            setRecivedRequiFre(recivReq);
            const frieTable = await getFriends(user.id);
            setFriends(frieTable);
            const blockUser = await getBlockedUser(user.id)
            setBlockedUser(blockUser);
            if (valueNav === 0) {
                setItems(users);
            }
            else if (valueNav === 1) {
                const reciUser = users.filter((ur) => {
                    return recivReq.some((re: reqFriendsDto) => re.senderId === ur.id);
                });
                setItems(reciUser);
            } else if (valueNav === 2) {
                const friend = users.filter((ur) => {
                    return frieTable.some((re: reqFriendsDto) => (re.receivedId === ur.id || re.senderId === ur.id));
                });
                setItems(friend);

            } else if (valueNav == 3) {
                const blk = users.filter((ur) => {
                    return blockUser.some((re: reqFriendsDto) => (re.receivedId === ur.id));
                });
                setItems(blk);
            }
        }
        getData();
    }, [valueNav, nbr]);

    useEffect(() => {
        const handleReceivedMessage = () => {
            setNbr((prevNbr) => prevNbr + 1);
        };

        socket.on("updateData", handleReceivedMessage);

        return () => {
            socket.off("updateData", handleReceivedMessage);
        };
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
                    {getIcon(user, valueNav, itm, sendRequist, friends, recivedRequistFre, blockedUser)}
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
