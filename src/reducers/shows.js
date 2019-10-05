const initialShows = require("./initialShowState.json").map(show => {
  let localStorageShows =
    localStorage.getItem("shows") && JSON.parse(localStorage.getItem("shows"));
  let currentLocalShow =
    localStorageShows &&
    localStorageShows.filter(
      localShow => localShow.headliner === show.headliner
    );
  if (currentLocalShow && currentLocalShow[0]) {
    return {
      ...show,
      tracked: currentLocalShow[0].tracked
    };
  }
  return show;
});
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
      localStorage.setItem(
        "shows",
        JSON.stringify(state.map(trackShow(action)))
      );
      return state.map(trackShow(action));
    default:
      return state;
  }
};

export default shows;
