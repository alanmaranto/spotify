import React from "react";
import Header from "./header/Header";
import { useStateValue } from "../../context/provider/provider";
import { userTypes } from "../../context/types/types";
import SongRow from "./songRow/SongRow";
import { MoreHoriz, Favorite, PlayCircleFilled } from "@material-ui/icons";
import "./Body.css";

const Body = ({ spotify }) => {
  const [{ discoverWeekly }, dispatch] = useStateValue();

  const playPlaylist = async () => {
    try {
      await spotify.play({
        context_uri: `spotify:playlist:37i9dQZEVXcHUlSyZiqgbN`,
      });
      const currentPlayingTrack = await spotify.getMyCurrentPlayingTrack();
      dispatch({
        type: userTypes.SET_ITEM,
        item: currentPlayingTrack.item,
      });
      dispatch({
        type: userTypes.SET_PLAYING,
        playing: true,
      });
    } catch (error) {
      return error;
    }
  };

  const playSong = async (id) => {
    try {
      await spotify.play({
        uris: [`spotify:track:${id}`],
      });
      const getCurrentPlayingTrack = await spotify.getMyCurrentPlayingTrack();
      dispatch({
        type: userTypes.SET_ITEM,
        item: getCurrentPlayingTrack.item,
      });
      dispatch({
        type: userTypes.SET_PLAYING,
        playing: true,
      });
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>{discoverWeekly?.name}</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
