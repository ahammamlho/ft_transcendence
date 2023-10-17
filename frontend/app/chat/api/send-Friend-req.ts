import { Backend_URL } from '@/app/lib/constants';
import axios from 'axios';

export async function sendRequistFriend(senderId: number, recivedId: number) {
    await axios.post(
        Backend_URL + `user/sendFriendRequest/${senderId}/${recivedId}`,
    );

}

export async function removeRequistFriend(senderId: number, recivedId: number) {
    await axios.delete(
        Backend_URL + `user/removeFriendRequest/${senderId}/${recivedId}`,
    );
}


export async function accepteRequistFriend(senderId: number, recivedId: number) {
    await axios.post(
        Backend_URL + `user/accepteFriendRequest/${senderId}/${recivedId}`,
    );
}

export async function deleteFriend(senderId: number, recivedId: number) {
    await axios.delete(
        Backend_URL + `user/deleteFriend/${senderId}/${recivedId}`,
    );
}