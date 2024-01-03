'use client';
import { useGlobalContext } from '@/app/context/store';
import { Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { getVueGeust } from '../ChatPage/api/fetch-users';
import { checkOwnerIsAdmin } from '../ChatPage/api/fetch-channel';
import { IoArrowBack } from 'react-icons/io5';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import MembersChannel from './components/membersChannel';
import UpdateChannel from './components/updateChannel';

const PageChat = () => {
  const router = useRouter();

  const { geust, setGeust, user, socket } = useGlobalContext();

  useEffect(() => {
    const getDataGeust = async () => {
      const idChannel = localStorage.getItem('geust.id-channel');
      if (idChannel) {
        const temp = await getVueGeust(user.id, idChannel, false);
        if (temp) setGeust(temp);
        else router.back();
      }
    };
    if (geust.id === '-1' && user.id !== '-1') getDataGeust();
  }, [user.id]);

  useEffect(() => {
    const getDataGeust = async () => {
      if (geust.id !== '-1') {
        const temp = await getVueGeust(user.id, geust.id, false);
        setGeust(temp);
      }
    };
    if (socket) {
      socket.on('updateChannel', getDataGeust);
      return () => {
        socket.off('updateChannel', getDataGeust);
      };
    }
  }, [socket]);

  const [isOwnerAdmin, setIsOwnerAdmin] = useState(false);
  useEffect(() => {
    const getData = async (data: { channelId: string }) => {
      if (geust.id === data.channelId) {
        const tmp: boolean = await checkOwnerIsAdmin(user.id, geust.id);
        console.log('setIsOwnerAdmin=', isOwnerAdmin);
        setIsOwnerAdmin(tmp);
      }
    };

    if (geust.id !== '-1' && user.id !== '-1' && !geust.isUser)
      getData({ channelId: geust.id });

    if (socket) {
      socket.on('changeStatusMember', getData);
      return () => {
        socket.off('changeStatusMember', getData);
      };
    }
  }, [geust.id, user.id]);

  return (
    <div className="bg-color-main">
      {geust.id !== '-1' ? (
        <div className="flex flex-col justify-start text-black pt-5 ">
          <div className="flex items-center pl-10">
            <IoMdArrowRoundBack
              onClick={() => {
                router.back();
              }}
              className="cursor-pointer my-auto mr-2 text-gray-400 hover:text-white active:text-gray-400 text-2xl md:text-3xl"
            />
            <h1 className="text-left font-bold text-md sm:text-lg md:text-2xl text-white ">
              Channel Settings
            </h1>
          </div>
          <div>
            {isOwnerAdmin ? (
              <div>
                <div className="pl-16 pt-4 flex justify-start">
                  <Text style={{ color: 'white', fontSize: 20 }}>Overview</Text>
                </div>
                <UpdateChannel />
              </div>
            ) : (
              <></>
            )}
            <div className="pl-16 pt-4 flex justify-start">
              <Text style={{ color: 'white', fontSize: 20 }}>Members</Text>
            </div>
            <MembersChannel />
          </div>
        </div>
      ) : (
        <div
          className="text-white"
          onClick={() => {
            console.log(user.id, geust.id);
          }}
        >
          ok
        </div>
      )}
    </div>
  );
};

export default PageChat;
