import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import GameBox from "../components/GameBox";
import Footer from "../components/Fotter";

function Home() {
  return (
    <>
      <NavBar />

      <div
        className="flex "
        style={{
          backgroundColor: "#0C0D14",
        }}
      >
        <Sidebar />
        <hr
          style={{
            backgroundColor: "white",
            marginTop: "12px",
            color: "#666699",
            display: "block",
            height: "70vh",
            width: "0.5px",
          }}
        />
        <div
          className="flex-1 m-2  "
          style={{
            backgroundColor: "#0C0D14",
          }}
        >
          <GameBox />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
