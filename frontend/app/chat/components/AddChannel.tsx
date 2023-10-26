'use client'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import { ScrollArea } from '@radix-ui/themes';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { useGlobalContext } from '../Context/store';
import { getValideUsers } from '../api/fetch-users';
import { socket } from '../api/init-socket';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { Button, DialogActions } from '@mui/material';

export default function AlertAddChannel() {
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [channelType, setChannelType] = useState<string>('public');
    const [channelName, setChannelName] = useState('');
    const [key, setKey] = useState('');
    const [member, setMember] = useState('');
    const [protect, setProtected] = useState<boolean>(false);

    const handleChannelType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChannelType(event.target.value);
        console.log(event.target.value);
    };
    const handleProtected = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        setProtected(event.target.checked);

    };

    const [open, setOpen] = React.useState(false);
    const [valideUsers, setValideUsers] = useState<userDto[]>([]);
    const { user } = useGlobalContext();
    const [clicked, setClicked] = useState<number>(0)
    const [update, setUpdate] = useState<number>(0)



    useEffect(() => {
        async function getData() {
            const temp = await getValideUsers(user.id);
            setValideUsers(temp);
        }
        getData();
        setClicked((pre) => pre++);
    }, [open, update]);



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



    return (
        <div>

            <TbSquareRoundedPlusFilled style={{ color: 'blue', fontSize: '40px' }}
                onClick={handleClickOpen} />

            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle textAlign="center" >{"Create Channel"}</DialogTitle>

                <DialogContent className='w-[20rem] h-[25rem] '>

                    <div
                        style={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center'
                        }}>

                        <ScrollArea type="always" scrollbars="vertical"
                            style={{
                                height: 300, width: 200,
                            }}>

                            <FormControl className='ml-2'>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">

                                    <FormControlLabel
                                        control={
                                            <Radio checked={channelType === 'public'}
                                                value="public"
                                                onChange={handleChannelType}
                                            />} label="Public" />

                                    <FormControlLabel
                                        control={
                                            <Radio checked={channelType === 'private'}
                                                value="private"
                                                onChange={handleChannelType}

                                            />} label="Private" />

                                </RadioGroup>
                            </FormControl>

                            <TextField required fullWidth size="small" className='mt-3'
                                style={{ width: '200px', background: "#edf6f9", borderRadius: 5 }}
                                label="Channel Name" variant="outlined"
                                value={channelName}
                                onChange={(e) => { setChannelName(e.target.value) }} />

                            <FormControlLabel control={<Checkbox onChange={handleProtected} />} label="Protected" />

                            <TextField
                                disabled={!protect}
                                fullWidth size="small" className='mt-3'
                                style={{ width: '200px', background: "#edf6f9", borderRadius: 5 }}
                                label="Channel Key" variant="outlined"
                                value={key}
                                onChange={(e) => { setKey(e.target.value) }} />

                            <TextField fullWidth size="small" className='mt-3'
                                style={{ width: '200px', background: "#edf6f9", borderRadius: 5 }}
                                label="Add membres" variant="outlined"
                                value={member}
                                onChange={(e) => { setMember(e.target.value) }} />

                        </ScrollArea>

                    </div>

                    <DialogActions style={{ justifyContent: 'center' }}>
                        <Button style={{ background: 'blue', color: "white" }}
                            onClick={handleClose}>Create</Button>
                    </DialogActions>

                </DialogContent>

            </Dialog>
        </div >
    );
}

