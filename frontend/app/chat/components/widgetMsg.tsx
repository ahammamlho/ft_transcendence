import { Text, Avatar } from '@radix-ui/themes';

export function MessageRight({ message }: { message: string }) {
    const cardStyles = {
        width: 200,
        borderTopRightRadius: 0,
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginLeft: 'auto',
        boxShadow: 'none',
        background: "#ddfdfd",
    };
    return (
        <div style={cardStyles} className='relative mb-2'>
            <div className='mb-4 text-sm'> {message}</div>
            <Text size="1" className='absolute bottom-1 right-2 mt-2'>
                10.25
            </Text>
        </div>
    );
}


export function MessageLeft({ message, geust }: { message: string, geust: userDto }) {
    const cardStyles = {
        width: 200,
        borderTopRightRadius: 10,
        padding: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: 'none',
        background: "#ddfdfd",


    };

    return (
        <div className='flex'>
            <Avatar
                size="1"
                src={geust.avatar}
                radius="full"
                fallback="T"
            />
            <div className='pl-2'>
                <Text as="span" size="2" weight="bold">
                    {geust.name}
                </Text>
                <div style={cardStyles} className='relative'>
                    <div className='mb-4  text-sm'> {message}</div>
                    <Text size="1" className='absolute bottom-1 right-2 mt-2'>
                        10.25
                    </Text>
                </div>
            </div>
        </div>
    );
}
