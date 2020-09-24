import React from "react";
import Header from "./header/Header";
import { useStateValue } from "../../context/provider/provider";
import "./Body.css";

const Body = ({ spotify }) => {
  const [{ discoverWeekly }, dispatch] = useStateValue();

  console.log("discoer", discoverWeekly);

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
