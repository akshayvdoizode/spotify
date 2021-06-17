import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  // const [{ playlists }, dispatch] = useDataLayerValue();
  const [{ MY_SONG }] = useDataLayerValue();

  // console.log(MY_SONG);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body-info">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02caaa456c44f69f10c8b2aa53"
          alt=""
        />
        {/* {playlists?.images?.map((images) => (
          <img src={images.url} alt="" />
        ))} */}
        {/* <img src={MY_SONG?.images[0].url} alt="" /> */}
        <div className="body-infoText">
          <strong>PLAYLIST</strong>
          <h2>{MY_SONG?.name}</h2>
          <p>{MY_SONG?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {MY_SONG?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
