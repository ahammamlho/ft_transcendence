import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Avatar, Flex, Text, Box, ScrollArea } from '@radix-ui/themes';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../Context/store';
import { AiFillMessage } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { getValideUsers } from '../api/fetch-users';


export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [searsh, setSearsh] = useState('');
    const [valideUsers, setValideUsers] = useState<userDto[]>([]);
    const [usersFilter, setUsersFilter] = useState<userDto[]>([]);
    const { user } = useGlobalContext();

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
    }, [open]);

    useEffect(() => {
        const tmp: userDto[] = valideUsers.filter((elm) => {
            const username = elm.name;
            return ((username.includes(searsh) && searsh != '') || searsh === "*");
        })
        setUsersFilter(tmp);
    }, [searsh])

    const widgetItem = (usersFilter.length !== 0) ? usersFilter.map((elm, index) => {
        return <Box p="1" pr="3" key={index}>
            <Flex align="center" justify="between" className='border-b py-2'>
                <div className='flex items-center '>
                    <Avatar
                        src={elm.avatar}
                        fallback="T"
                        style={{ height: '40px', borderRadius: '40px' }}
                    />
                    <Text size="3" weight="bold" className='pl-2'>
                        {elm.name}
                    </Text>
                </div>
                <div className='flex items-center'>
                    {!elm.isFriends ? <BsPersonFillAdd size='20' className="mr-4" onClick={() => { }} /> : <></>}

                    <AiFillMessage size='20' onClick={() => { }} />

                </div>
            </Flex>
        </Box>
    }) : <div className='flex items-center justify-center'>pas user</div>
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>

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

