import axios from 'axios';

async function getMessageTwoUsers(
  sender: number,
  recived: number,
): Promise<msgDbdto[]> {
  const response = await axios.get(
    `http://localhost:3333/messages/${recived}/${sender}`,
  );
  const allMessage = await response.data;
  console.log('-------------------------->', allMessage);
  return allMessage;
}

export default getMessageTwoUsers;
