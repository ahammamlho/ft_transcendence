import { Backend_URL } from '@/app/lib/constants';
import axios from 'axios';

async function sendRequistFriend(senderId: number, recivedId: number) {
  const response = await axios.post(
    Backend_URL + `user/sendFriendRequest/${senderId}/${recivedId}`,
  );

  const newReq = await response.data;
  console.log(newReq);
  return newReq;
}

export default sendRequistFriend;
