// Action Creator
export const selectSong = song => {
  return {
    // return an Action
    type: 'SONG_SELECTED',
    payload: song
  };
};
