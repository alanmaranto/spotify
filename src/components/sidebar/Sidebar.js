import React from "react";
import SidebarOption from "./sidebarOptions/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./Sidebar.css";

const Body = () => {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>
      <SidebarOption title="Trance" />
      <SidebarOption title="Trance" />
      <SidebarOption title="Trance" />
      
    </div>
  );
};

export default Body;
