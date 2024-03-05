import React from "react";
import { useGameContext } from "../GameContext";

function GamePlayer() {
  const { selectedGame } = useGameContext();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Your NavBar component */}

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left Advertisement */}
        <div className="flex-shrink-0 md:w-1/8 bg-gray-200 sm:w-16   rounded-lg font-bold">
          Left Advertisement
        </div>

        {/* Game iframe */}
        <div className="flex-grow mt-12 md:mt-0 flex justify-center items-center">
          <iframe
            title="Selected Game"
            src={selectedGame}
            className="w-full h-96 md:h-full shadow-md"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </div>

        {/* Right Advertisement */}
        <div className="flex-shrink-0 md:w-1/8 bg-gray-200 sm:w-16   rounded-lg font-bold">
          Right Advertisement
        </div>
      </div>
    </div>
  );
}

export default GamePlayer;
