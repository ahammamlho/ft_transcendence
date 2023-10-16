'use client';
import { TextField, Avatar, ScrollArea, Box, Text, } from '@radix-ui/themes';
import { useEffect, useRef } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { useGlobalContext } from '../Context/store';


const BoxChat = () => {
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
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
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
                        {/* <Flex direction="column" > */}
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        <p>"ssss"  "ssss"  "ssss"  "ssss"  "ssss"</p>
                        {/* </Flex> */}
                    </Box>
                </ScrollArea>
                <TextField.Root className="ml-2 mr-2" style={{ width: 380 }}>
                    <TextField.Input radius="full" placeholder="  Search the docs…" size="2" />
                    <TextField.Slot>
                        <BsFillSendFill height="16" width="16" color='blue' />
                    </TextField.Slot>
                </TextField.Root>
            </div>
        </Box>
    )
}

export default BoxChat
