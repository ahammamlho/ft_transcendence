'use client';
import { TextField, Avatar, ScrollArea, Box, Text, Flex } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { useGlobalContext } from '../Context/store';
import { IsTypingMsg, ShowMessages } from './widgetMsg';
import { getMessageTwoUsers } from '../api/fetch-msg';
import { emitMessage, socket } from '../api/init-socket';
import { GoDotFill } from "react-icons/go";
import { getColorStatus } from './ListUser';
import { getUser } from '../api/fetch-users';
import { Status } from './ListUser';
import { formatDistance } from 'date-fns'

const BoxChat = () => {
    const [msg, setMsg] = useState('');
    const [Allmsg, setAllMessage] = useState<msgDto[]>([]);
    const { geust, user, setGeust } = useGlobalContext();
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const [isTyping, setIsTyping] = useState<boolean>(false)
    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    };
    scrollToBottom();

    useEffect(() => {
        scrollToBottom();
    }, [Allmsg, isTyping])

    useEffect(() => {

        const handleReceivedMessage = (data: msgDto) => {
            if (geust.id === data.senderId) {
                setIsTyping(false);
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

    useEffect(() => {
        const upDateGeust = async () => {
            if (geust.id !== -1) {
                const temp = await getUser(geust.id);
                setGeust(temp);
                setIsTyping(false);
            }
        }
        socket.on("updateData", upDateGeust);
        return () => {
            socket.off("updateData", upDateGeust);
        };
    }, [geust.id]);

    useEffect(() => {
        if (msg != "") {
            emitMessage('isTyping', {
                content: '',
                senderId: user.id,
                receivedId: geust.id,
            });
        }
    }, [msg])

    useEffect(() => {
        const updateIsTyping = () => {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
            }, 2000);
        }
        socket.on("isTyping", updateIsTyping);
        return () => {
            socket.off("isTyping", updateIsTyping);
        };
    }, []);

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
                createdAt: (new Date()).getTime(),
                senderId: user.id,
                receivedId: geust.id,
            };
            setAllMessage((prevMessages) => [...prevMessages, newMsg]);
        }
        setMsg('');
    }


    return (geust.id != -1) ? (
        <Box
            style={{
                width: 400, height: 500, padding: 2,
                borderRadius: 10, background: "white", marginLeft: 3
            }}>

            <div className="flex border-b items-center justify-start pl-2 mt-2 mb-2 pb-1">
                <Avatar
                    size="3"
                    src={geust.avatar}
                    radius="full"
                    fallback="T"
                />
                <Text className='absolute pt-6 pl-7'>
                    <GoDotFill size={20} color={getColorStatus(geust.status)} />
                </Text>
                <Flex direction="column" className='flex' >
                    <Text size="2" weight="bold" className='pl-2'>
                        {geust.name}
                    </Text>
                    {
                        (geust.status !== Status.ACTIF) ?
                            <Text size="1" weight="light" className='pl-2'>
                                {formatDistance(new Date(geust.lastSee), new Date(), { addSuffix: true })}
                            </Text> :
                            <></>
                    }
                </Flex>

            </div >

            <div  >

                <ScrollArea type="always" scrollbars="vertical" style={{ height: 400 }} ref={scrollAreaRef}>
                    <Box p="1" pr="3">
                        <ShowMessages messages={Allmsg} geust={geust} />
                        {isTyping ? <IsTypingMsg geust={geust} /> : <></>}
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
    ) : <></>
}

export default BoxChat
