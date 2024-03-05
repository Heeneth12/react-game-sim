import React from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../GameContext";

function GameBox() {
  const items = [
    {
      H1: "Shell Shockers",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "Fpp game & action",
      Link: "https://games.crazygames.com/en_US/shellshockersio/index.html",
      Display:
        "https://images.crazygames.com/shellshockersio_16x9/20240105032649/shellshockersio_16x9-cover?auto=format,compress&q=75&cs=strip",
    },
    {
      H1: "Dinoswords",
      details: "⭐ ⭐ ⭐ ",
      description: "Fun ",
      Link: "https://dinoswords.gg/",
      Display:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino_with_hat.gif",
    },
    {
      H1: "Kirka",
      details: "⭐ ⭐ ⭐ ⭐ ",
      description: "Fpp game & fun",
      Link: "https://www.crazygames.com/embed/kirka-io",
      Display:
        "https://images.crazygames.com/kirka-io_16x9/20231023094118/kirka-io_16x9-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    },
    {
      H1: "Chees",
      details: "⭐ ⭐  ",
      description: "chess & 2 player",
      Link: "https://www.crazygames.com/embed/chess-online-multiplayer-game",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
    {
      H1: "TAG",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "2 player & fun",
      Link: "https://games.crazygames.com/en_US/tag-2-3-4-players/index.html",
      Display:
        "https://images.crazygames.com/tag-2-3-4-players/20221212172606/tag-2-3-4-players-cover?auto=format,compress&q=75&cs=strip",
    },
    {
      H1: "Chees",
      details: "⭐ ",
      description: "Trending",
      Link: "https://www.crazygames.com/embed/chess-online-multiplayer-game",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
    {
      H1: "Tilo",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "Fun ",
      Link: "https://www.crazygames.com/embed/tilo",
      Display:
        "https://images.crazygames.com/tilo/20200818141523/tilo-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    },
    {
      H1: "CN",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "Rs: 50",
      Link: "https://dinoswords.gg/",
      Display:
        "https://cn.i.cdn.ti-platform.com/content/92/roblox-game-on/link/za/cn_emea_roblox_gameon_banners_1920x1080_01.32c094ee.jpg",
    },
    {
      H1: "Space War",
      details: "⭐ ",
      description: "action",
      Link: "https://cdn.htmlgames.com/FillTheMaze/index.html",
      Display: "https://cdn.mos.cms.futurecdn.net/GTvQDMxXZ89cgMShEMETGg.jpg",
    },
    {
      H1: "Super Mario",
      details: "⭐ ⭐ ⭐ ⭐ ",
      description: "testing page",
      Link: "https://cdn.htmlgames.com/QueenOfEgyptCleopatrasJewels/index.html",
      Display:
        "https://cdn.mos.cms.futurecdn.net/mNHbzG95DFa9Wxzj6QBnXF-1200-80.jpg",
    },
    {
      H1: "Chees",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "testing page",
      Link: "https://www.crazygames.com/embed/chess-online-multiplayer-game",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
    {
      H1: "Chees",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "testing page",
      Link: "https://games.crazygames.com/en_US/kirka-io/index.html",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
    {
      H1: "War Zone",
      details: "⭐ ⭐ ⭐ ⭐ ⭐",
      description: "War",
      Link: "https://games.crazygames.com/en_US/shellshockersio/index.html",
      Display:
        "https://images.crazygames.com/tilo/20200818141523/tilo-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
    },
    {
      H1: "CN",
      details: "7k ❤️",
      description: "Rs: 50",
      Link: "https://dinoswords.gg/",
      Display:
        "https://cn.i.cdn.ti-platform.com/content/92/roblox-game-on/link/za/cn_emea_roblox_gameon_banners_1920x1080_01.32c094ee.jpg",
    },
    {
      H1: "Space War",
      details: "60 ❤️",
      description: "Rs: 47",
      Link: "https://cdn.htmlgames.com/FillTheMaze/index.html",
      Display: "https://cdn.mos.cms.futurecdn.net/GTvQDMxXZ89cgMShEMETGg.jpg",
    },
    {
      H1: "Super Mario",
      details: "21 ❤️",
      description: "testing page",
      Link: "https://cdn.htmlgames.com/QueenOfEgyptCleopatrasJewels/index.html",
      Display:
        "https://cdn.mos.cms.futurecdn.net/mNHbzG95DFa9Wxzj6QBnXF-1200-80.jpg",
    },
    {
      H1: "Chees",
      details: "2 ❤️",
      description: "testing page",
      Link: "https://cdn.htmlgames.com/Mahjong3DConnect/index.html",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
    {
      H1: "Chees",
      details: "2 ❤️",
      description: "testing page",
      Link: "https://games.crazygames.com/en_US/kirka-io/index.html",
      Display:
        "https://play-lh.googleusercontent.com/COcL9LhQaI8nOdKbqGq0jzsU6eX_oCEd5bnSyK5-YL338_lO5TEHUlmALF36pZ3w8A=w526-h296-rw",
    },
  ];

  const { setSelectedGame } = useGameContext();
  const handlePlayNowClick = (link) => {
    setSelectedGame(link); // Set the selected game using the context
  };
  return (
    <>
      <div className="flex flex-col overflow-y-auto max-h-screen">
        <div
          className="relative overflow-hidden rounded-lg shadow-md mb-2 mt-2 p-24  m-4"
          style={{
            backgroundColor: "#324AB2",
          }}
        ></div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pl-4 pr-4 mb-8 p-2 bg-gray-400"
          style={{ backgroundColor: "#0C0D14" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden  shadow-md hover:shadow-xl transition duration-300 mb-8"
            >
              <img
                src={item.Display}
                alt={`Image ${index}`}
                className="w-full object-cover h-48 sm:h-64 md:h-56 rounded-lg"
              />

              <div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity  ">
                  <div className="text-white text-center">
                    <h1 className="text-2xl font-bold mb-2">{item.H1}</h1>
                    <p className="text-sm mb-4"></p>
                    <p className="text-sm mb-2"></p>
                    <Link to="/game-player">
                      <button
                        onClick={() => handlePlayNowClick(item.Link)}
                        className="font-bold inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-2 font-bold"
                      >
                        Play Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="text-white mt-1">
                  <h1 className="font-bold">{item.H1}</h1>
                  <p
                    className="text-xs"
                    style={{
                      fontSize: "100",
                    }}
                  >
                    {item.description}
                  </p>
                  <p>{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GameBox;
