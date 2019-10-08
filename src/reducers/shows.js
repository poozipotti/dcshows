const initialShows = require("./initialShowState.json").map(show => {
  //getting data from local storage
  //TODO this probably isn't right but it works
  return {
    ...show,
    tracked: localStorage.getItem(show.headliner)  === 'true'
  } 
 });
//-----------------ACTUAL REDUCERS ------------------------//

const trackShow = action => {
  return show => {
    if (show.headliner === action.headliner) {
      return {
        ...show,
        tracked: !show.tracked
      };
    }
    return show;
  };
};
const shows = (state = initialShows, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW":
      return state.map(trackShow(action));
    default:
      return state;
  }
};

export default shows;
