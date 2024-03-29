import React from "react";
import { useGameContext } from "../GameContext";
import NavBar from "../components/NavBar";

function GamePlayer() {
  const { selectedGame } = useGameContext();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-grow mt-12 md:mt-0 flex justify-center items-center">
          <iframe
            title="Selected Game"
            src={selectedGame}
            className="w-full h-96 md:h-full shadow-md"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GamePlayer;
