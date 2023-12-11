"use client";
import { GoHomeFill } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidLogOut } from "react-icons/bi";
import SBSection from "./SBSection";
import SBItems from "./SBItems";
import { useState } from "react";
import Cookies from "js-cookie";
import { useGlobalContext } from "@/app/context/store";


export default function SideBar() {
  const [isSelectedList, setIsSelectedList] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function getIconStyle(index: number) {
    const iconStyle = ` mx-auto transition ease-in-out delay-100 ${isSelectedList[index] ? "text-white scale-110" : "text-gray-400"
      }
    // small screen
    w-4 h-4 
    min-[320px]:w-5 min-[320px]:h-5
    // Big screen
    md:w-6 md:h-6
    `;
    return iconStyle;
  }


  let sBItemsList = [
    {
      pageName: "DashboardPage",
      icon: <GoHomeFill className={`${getIconStyle(0)}`} />,
      index: 0,
    },
    {
      pageName: "ChatPage",
      icon: <BsFillChatDotsFill className={`${getIconStyle(1)}`} />,
      index: 1,
    },
    {
      pageName: "FriendsPage",
      icon: <FaUserFriends className={`${getIconStyle(2)}`} />,
      index: 2,
    },
    {
      pageName: "LeaderboardPage",
      icon: <MdLeaderboard className={`${getIconStyle(3)}`} />,
      index: 3,
    },
    {
      pageName: "GamePage",
      icon: <IoGameController className={`${getIconStyle(4)}`} />,
      index: 4,
    },
    {
      pageName: "NotificationPage",
      icon: <IoMdNotifications className={`${getIconStyle(5)}`} />,
      index: 5,
    },
    {
      pageName: "SettingsPage",
      icon: <IoSettingsSharp className={`${getIconStyle(6)}`} />,
      index: 6,
    },
    {
      pageName: "HomePage",
      icon: <BiSolidLogOut className={`${getIconStyle(7)}`} />,
      index: 7,
    },
  ];
  const { user, socket } = useGlobalContext();
  const handleItemClick = (index: number) => {
    const updatedIsSelectedList = [];
    for (let i = 0; i < isSelectedList.length; i++) {
      updatedIsSelectedList[i] = false;
    }
    updatedIsSelectedList[index] = true;
    if (index === 7) {
      Cookies.remove("access_token", { sameSite: 'none', secure: true });
      Cookies.remove("intra_id", { sameSite: 'none', secure: true });
      if (socket) {
        socket.emit('updateStatusGeust', user.id);
      }
    }
    setIsSelectedList(updatedIsSelectedList);
  };

  return (
    <div
      className=" flex flex-col   bg-color-main-dark   rounded-br-full fixed top-0 
      transition-all duration-400 ease-in-out
      h-fit w-20 
      sm:w-24 md:w-28 "
    >
      <div
        className=" mx-auto  flex flex-col justify-center
                       md:h-24 h-16"
      >
        <img className="h-2/3 m-auto " src="/logo.png" alt="" />
      </div>

      <div
        className="flex flex-col justify-between 
                      h-5/6 pb-8 pt-18 "
      >
        <SBSection sectionName="Home">
          {sBItemsList.slice(0, 5).map((item) => (
            <SBItems
              key={item.pageName}
              pageName={item.pageName}
              onClick={() => handleItemClick(item.index)}
            >
              {item.icon}
            </SBItems>
          ))}
        </SBSection>

        <SBSection sectionName="Profile">
          {sBItemsList.slice(5, 8).map((item) => (
            <SBItems
              key={item.pageName}
              pageName={item.pageName}
              onClick={() => handleItemClick(item.index)}
            >
              {item.icon}
            </SBItems>
          ))}
        </SBSection>
      </div>
    </div>
  );
}
