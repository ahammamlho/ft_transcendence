

import { BsPersonFillAdd } from "react-icons/bs";
import { BiUserCheck } from "react-icons/bi";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaUserTimes, FaUserAltSlash } from "react-icons/fa";
import {
    sendRequistFriend, removeRequistFriend,
    accepteRequistFriend, deleteFriend, blockedUser, unBlockedUser
} from '../../api/send-Friend-req';
import { emitMessage } from "../../api/init-socket";

const getIcon = (user: userDto, valueNav: number, item: userDto, sendRequist: reqFriendsDto[],
    friends: reqFriendsDto[], recivedRequistFre: reqFriendsDto[], blockedUsers: reqFriendsDto[]) => {

    const userInRecivedReq = recivedRequistFre.some(re => re.senderId === item.id);
    const userInBlockerdUsera = blockedUsers.some(re => re.receivedId === item.id)
    const userInBlockerd = blockedUsers.some(re => re.senderId === item.id)
    if (userInBlockerd)
        return;

    if (valueNav == 0 && !userInRecivedReq && !userInBlockerdUsera) {
        const userIsFriends = friends.some(re => (re.receivedId === item.id || re.senderId === item.id));
        const userInReqFrie = sendRequist.some(re => re.receivedId === item.id);

        if (userInReqFrie || userIsFriends) {
            return (
                <FaUserTimes size='20' style={{ marginRight: 10, color: 'red' }} onClick={async () => {
                    if (userInReqFrie)
                        await removeRequistFriend(user.id, item.id);
                    if (userIsFriends)
                        await deleteFriend(user.id, item.id);
                    emitMessage('updateData', {
                        content: '',
                        senderId: user.id,
                        receivedId: item.id,
                    });
                }} />
            );
        } else {
            return (
                <BsPersonFillAdd size='20' style={{ marginRight: 10, color: 'green' }} onClick={async () => {
                    await sendRequistFriend(user.id, item.id);
                    emitMessage('updateData', {
                        content: '',
                        senderId: user.id,
                        receivedId: item.id,
                    });
                }} />
            );
        }
    } else if (valueNav == 1 || userInRecivedReq) {
        return (
            <BiUserCheck size='20' style={{ marginRight: 10, color: 'green' }} onClick={async () => {
                await accepteRequistFriend(user.id, item.id);
                emitMessage('updateData', {
                    content: '',
                    senderId: user.id,
                    receivedId: item.id,
                });
            }} />
        );
    } else if (valueNav == 2) {
        return (
            <FaUserAltSlash size='20' style={{ marginRight: 10, color: 'red' }} onClick={async () => {
                await blockedUser(user.id, item.id);
                emitMessage('updateData', {
                    content: '',
                    senderId: user.id,
                    receivedId: item.id,
                });
            }} />
        );
    } else if (valueNav == 3 || userInBlockerdUsera) {
        return (
            <AiOutlineUserSwitch size='20' style={{ marginRight: 10, color: 'blue' }} onClick={async () => {
                await unBlockedUser(user.id, item.id);
                emitMessage('updateData', {
                    content: '',
                    senderId: user.id,
                    receivedId: item.id,
                });
            }} />
        );
    }
}

export default getIcon;