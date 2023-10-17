'use client';
import { TextField, Avatar, ScrollArea, Box, Text, } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { useGlobalContext } from '../Context/store';
import { MessageLeft, MessageRight, ShowMessages } from './widgetMsg';
import getMessageTwoUsers from '../api/fetch-msg';
import { emitMessage, socket, socketInitializer } from '../api/init-socket';


const BoxChat = () => {
    const [msg, setMsg] = useState('');
    const [Allmsg, setAllMessage] = useState<msgDto[]>([]);
    const { geust, user } = useGlobalContext();
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [Allmsg])



    useEffect(() => {
        const handleReceivedMessage = (data: msgDto) => {
            if (geust.id === data.senderId) {
                setAllMessage((prevMessages) => [...prevMessages, data]);
            }
        };

        socket.on("findMsg2UsersResponse", handleReceivedMessage);

        return () => {
            socket.off("findMsg2UsersResponse", handleReceivedMessage);
        };
    }, [geust.id]);

    useEffect(() => {
        async function getData() {
            const msgs = await getMessageTwoUsers(user.id, geust.id);
            setAllMessage(msgs);
        }
        if (geust.id) {
            getData();
        }
    }, [geust.id]);

    const handleSendMessage = () => {
        if (msg.trim() != '') {
            emitMessage('createMessage', {
                content: msg.trim(),
                senderId: user.id,
                receivedId: geust.id,
            });
            let newMsg = {
                id: 20,
                content: msg.trim(),
                createdAt: 5,
                senderId: user.id,
                receivedId: geust.id,
            };
            setAllMessage((prevMessages) => [...prevMessages, newMsg]);
        }
        setMsg('');
    }


    return (
        <Box
            style={{
                width: 400, height: 500, padding: 2,
                borderRadius: 10, background: "white", marginLeft: 3
            }}>

            <div className="flex border-b items-center justify-start pl-2 mt-2 mb-2 pb-1">
                <Avatar
                    size="2"
                    src={geust.avatar}
                    radius="full"
                    fallback="T"
                />
                <Text as="div" size="1" weight="bold" className='pl-2'>
                    {geust.name}
                </Text>

            </div >
            <div  >

                <ScrollArea type="always" scrollbars="vertical" style={{ height: 410 }} ref={scrollAreaRef}>
                    <Box p="1" pr="3">
                        <ShowMessages messages={Allmsg} geust={geust} />
                    </Box>
                </ScrollArea>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                }}>
                    <TextField.Root className="ml-2 mr-2" style={{ width: 380 }} >
                        <TextField.Input radius="full" placeholder="  Search the docs…" size="2"
                            value={msg}

                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setMsg(event.target.value);
                            }} />

                        <TextField.Slot>
                            <BsFillSendFill height="16" width="16" color='blue'
                                onClick={() =>
                                    handleSendMessage()} />
                        </TextField.Slot>
                    </TextField.Root>
                </form>
            </div>
        </Box>
    )
}

export default BoxChat
