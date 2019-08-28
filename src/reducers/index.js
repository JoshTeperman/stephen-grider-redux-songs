import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'I want it That Way', duration: '12:22' },
    { title: 'All Star', duration: '3:05' },
    { title: 'Macarent', duration: '2:13' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songs,
  selectedSong: selectedSongReducer
});
