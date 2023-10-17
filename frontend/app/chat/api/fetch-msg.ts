import axios from 'axios';

async function getMessageTwoUsers(
    sender: number,
    recived: number,
): Promise<msgDto[]> {
    const response = await axios.get(
        `http://localhost:3333/messages/${recived}/${sender}`,
    );
    const allMessage = await response.data;
    return allMessage;
}

export default getMessageTwoUsers;