import { Backend_URL } from '@/app/lib/constants';
import axios from 'axios';

async function getRequistFriends(senderId: number) {
  const response = await axios.get(
    Backend_URL + `user/getFriendRequest/${senderId}`,
  );

  const allReq = await response.data;
  // console.log(allReq);
  return allReq;
}

export default getRequistFriends;
