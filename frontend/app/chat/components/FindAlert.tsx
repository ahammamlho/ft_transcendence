'use client'
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Avatar, Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../Context/store';
import { AiFillMessage } from "react-icons/ai";
import { BsPersonFillAdd, } from "react-icons/bs";
import { FaUserTimes, } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { useEffect, useState } from 'react';
import { getValideUsers } from '../api/fetch-users';
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { accepteRequistFriend, removeRequistFriend, sendRequistFriend } from '../api/send-Friend-req';
import { emitMessage, socket, socketInitializer } from '../api/init-socket';
import { getColorStatus } from './ListUser';




export default function AlertDialogFind() {
    const [open, setOpen] = React.useState(false);
    const [searsh, setSearsh] = useState('');
    const [valideUsers, setValideUsers] = useState<userDto[]>([]);
    const [usersFilter, setUsersFilter] = useState<userDto[]>([]);
    const { user, setGeust } = useGlobalContext();

    const [clicked, setClicked] = useState<number>(0)
    const [update, setUpdate] = useState<number>(0)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        async function getData() {
            const temp = await getValideUsers(user.id);
            setValideUsers(temp);
        }
        getData();
        setClicked((pre) => pre++);
    }, [open, update]);

    useEffect(() => {
        const tmp: userDto[] = valideUsers.filter((elm) => {
            const username = elm.name;
            return ((username.includes(searsh) && searsh != '') || searsh === "*");
        })
        setUsersFilter(tmp);
    }, [searsh, valideUsers])

    useEffect(() => {
        const updateIcons = () => {
            setUpdate((pre) => { return pre + 1 });
        };
        if (socket) {
            socket.on("updateData", updateIcons);
        }
        return () => {
            socket.off("updateData", updateIcons);
        };
    }, [socket]);

    const widgetItem = (usersFilter.length !== 0) ? usersFilter.map((elm, index) => {
        return <Box p="1" pr="3" key={index}>
            <Flex align="center" justify="between" className='border-b py-2'>
                <div className='flex items-center relative'>
                    <Avatar
                        src={elm.avatar}
                        fallback="T"
                        style={{ height: '40px', borderRadius: '40px' }}
                    />
                    <div className='absolute pt-7 pl-7'>
                        <GoDotFill size={15} color={getColorStatus(elm.status)} />
                    </div>
                    <Text size="3" weight="bold" className='pl-2'>
                        {elm.name}
                    </Text>
                </div>
                <div className='flex items-center'>
                    {/* send friends requist */}
                    {(elm.friendship === 0) ? <BsPersonFillAdd color="blue" size='20' className="mr-4" onClick={async () => {
                        await sendRequistFriend(user.id, elm.id);
                        elm.friendship = 3;
                        socket.emit('updateData', {
                            content: '',
                            senderId: user.id,
                            receivedId: elm.id,
                        });
                        setClicked((pre) => { return pre + 1 });
                    }} /> : <></>}

                    {/* accept friends requist */}
                    {(elm.friendship === 2) ? <BiUserCheck color="green" size='20' className="mr-4" onClick={async () => {
                        await accepteRequistFriend(user.id, elm.id);
                        elm.friendship = 1;
                        socket.emit('updateData', {
                            content: '',
                            senderId: user.id,
                            receivedId: elm.id,
                        });
                        setClicked((pre) => { return pre + 1 });
                    }} /> : <></>}

                    {/* remove friends requist */}
                    {(elm.friendship === 3) ? <FaUserTimes color="red" size='20' className="mr-4" onClick={async () => {
                        await removeRequistFriend(user.id, elm.id);
                        elm.friendship = 0;
                        socket.emit('updateData', {
                            content: '',
                            senderId: user.id,
                            receivedId: elm.id,
                        });
                        setClicked((pre) => { return pre + 1 });
                    }} /> : <></>}

                    <AiFillMessage size='20' onClick={() => {
                        handleClose();
                        setGeust(elm);
                    }} />

                </div>
            </Flex>
        </Box>
    }) : <div className='flex items-center justify-center'>pas user</div>

    return (
        <div>

            <TbSquareRoundedPlusFilled style={{ color: 'blue', fontSize: '40px' }}
                onClick={handleClickOpen} />

            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <DialogContent className=' w-[30rem] h-[20rem] items-center justify-center'>

                    <TextField fullWidth size="small"
                        label="Find a friend" variant="outlined"
                        value={searsh}
                        onChange={(e) => { setSearsh(e.target.value) }} />
                    <ScrollArea type="always" scrollbars="vertical"
                        style={{ height: 240 }}>
                        {widgetItem}
                    </ScrollArea>

                </DialogContent>
            </Dialog>
        </div >
    );
}
