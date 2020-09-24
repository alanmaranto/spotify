import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../../context/provider/provider";
import "./Header.css";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs or Albums" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0].url} alt={user?.display_name}></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
