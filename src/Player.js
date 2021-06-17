import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player-body">
        {/* <h1>WELCOME TO SPOTIFY</h1> */}
        {/* SideBar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Player;
