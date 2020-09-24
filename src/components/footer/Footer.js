/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useStateValue } from "../../context/provider/provider";
import { userTypes } from "../../context/types/types";
import { Grid, Slider } from "@material-ui/core";
import {
  PauseCircleOutline,
  Shuffle,
  SkipPrevious,
  PlayCircleOutline,
  SkipNext,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import "./Footer.css";

const Footer = ({ spotify }) => {
  const [{ item, playing }, dispatch] = useStateValue();

  useEffect(() => {
    const getMyCurrentPlaybackState = async () => {
      try {
        const currentPlaybackState = await spotify.getMyCurrentPlaybackState();
        dispatch({
          type: userTypes.SET_PLAYING,
          playing: currentPlaybackState.is_playing,
        });

        dispatch({
          type: userTypes.SET_ITEM,
          item: currentPlaybackState.item,
        });
      } catch (error) {
        return error;
      }
    };

    getMyCurrentPlaybackState();
  }, [dispatch, spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: userTypes.SET_PLAYING,
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: userTypes.SET_PLAYING,
        playing: true,
      });
    }
  };

  const skipNext = async () => {
    try {
      await spotify.skipToNext();
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

  const skipPrevious = async () => {
    try {
      await spotify.skipToPrevious();
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

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer__albumLogo"
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious onClick={skipPrevious} className="footer__icon" />
        {playing ? (
          <PauseCircleOutline
            className="footer__icon"
            fontSize="large"
            onClick={handlePlayPause}
          />
        ) : (
          <PlayCircleOutline
            onClick={handlePlayPause}
            className="footer__icon"
            fontSize="large"
          />
        )}

        <SkipNext onClick={skipNext} className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
