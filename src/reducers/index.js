import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "4:05" },
    { title: "Headcase", duration: "2:30" },
    { title: "Far Hills Cider", duration: "3:15" },
    { title: "OutRight", duration: "3:56" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
