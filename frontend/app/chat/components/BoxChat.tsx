'use client';
import { TextField, Avatar, ScrollArea, Box, Text, } from '@radix-ui/themes';
import { useEffect, useRef, useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { useGlobalContext } from '../Context/store';
import { MessageLeft, MessageRight } from './widgetMsg';


const BoxChat = () => {
    const [msg, setMsg] = useState('');
    const { geust } = useGlobalContext();
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [geust]);



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
                        <MessageRight message="Your message content goes here." />
                        <MessageLeft message="Your replay message content goes here." geust={geust} />
                    </Box>
                </ScrollArea>

                <TextField.Root className="ml-2 mr-2" style={{ width: 380 }}>
                    <TextField.Input radius="full" placeholder="  Search the docs…" size="2"
                        value={msg}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setMsg(event.target.value);
                        }} />

                    <TextField.Slot>
                        <BsFillSendFill height="16" width="16" color='blue'
                            onClick={() => {
                                console.log(msg);
                                setMsg("");
                            }} />
                    </TextField.Slot>
                </TextField.Root>
            </div>
        </Box>
    )
}

export default BoxChat
