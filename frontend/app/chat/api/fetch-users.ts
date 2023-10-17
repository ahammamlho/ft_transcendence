import { Backend_URL } from '@/app/lib/constants';
import axios from 'axios';

export async function getAllUsers(author: string) {
    const res = await axios.get(
        Backend_URL + 'user/all',
    );
    const users = await res.data;
    return users;
}


export async function getRequistFriends(senderId: number) {
    const response = await axios.get(
        Backend_URL + `user/getFriendRequest/${senderId}`,
    );

    const allReq = await response.data;
    return allReq;
}

