
import React, { useContext, useEffect, useState } from "react";
import { useGlobalContext } from "../../context/store";
// import { WebsocketContext } from "../random/contexts/WebsocketContext";

const WaitingForPlayer = () => {
  // const socket = useContext(WebsocketContext);
  const { socketGame } = useGlobalContext()
  const [message, setMessage] = useState("Waiting for another player...");

  useEffect(() => {
    socketGame?.on("startGame", () => {
      // setMessage('Game started! You can play now.');
    });

    return () => {
      socketGame?.off("startGame");
    };
  }, []);

  return (
    <div>
      <p className="bg-white">{message}</p>
    </div>
  );
};

export default WaitingForPlayer;
