import { Backend_URL } from '@/app/lib/constants';
import axios from 'axios';

export async function getAllUsers(author: string) {
    const res = await axios.get(
        Backend_URL + 'user/all',
    );
    const users = await res.data;
    return users;
}

export async function getValideUsers(id: number) {
    const res = await axios.get(
        Backend_URL + `user/getValideUsers/${id}`,
    );
    const users = await res.data;
    return users;
}

export async function getUser(id: number) {
    const res = await axios.get(
        Backend_URL + `user/${id}`,
    );
    const user = await res.data;
    return user;
}

export async function getUserForMsg(senderId: number) {
    const res = await axios.get(
        Backend_URL + `user/getUserForMsg/${senderId}`,
    );
    const users = await res.data;
    return users;
}


export async function getSendRequistFriends(senderId: number) {
    const response = await axios.get(
        Backend_URL + `user/getSendFriendRequest/${senderId}`
    );

    const allReq = await response.data;
    return allReq;
}


export async function getRecivedRequistFriends(senderId: number) {
    const response = await axios.get(
        Backend_URL + `user/getRecivedRequistFriends/${senderId}`,
    );
    const allReq = await response.data;
    return allReq;
}

export async function getFriends(senderId: number) {
    const response = await axios.get(
        Backend_URL + `user/getFriends/${senderId}`,
    );
    const allReq = await response.data;
    return allReq;
}

export async function getBlockedUser(senderId: number) {
    const response = await axios.get(
        Backend_URL + `user/getBlockedUser/${senderId}`,
    );
    const allReq = await response.data;
    return allReq;
}
