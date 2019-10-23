interface show {
    headliner: string,
    otherBands?: String,
    location: String,
    month: number,
    day: number,
    year:number,
    tracked: boolean
}
const initialShows:ReadonlyArray<show> = require("./initialShowState.json").map((show:show):show => {
  //getting data from local storage
  //TODO this probably isn't right but it works
  return {
    ...show,
    tracked: localStorage.getItem(show.headliner)  === 'true'
  } 
 });
//-----------------ACTUAL REDUCERS ------------------------//

const trackShow = (action:any) => {
  return (show:show) :show => {
    if (show.headliner === action.headliner) {
      return {
        ...show,
        tracked: !show.tracked
      };
    }
    return show;
  };
};
export const shows = (state = initialShows, action:any):ReadonlyArray<show> => {
  switch (action.type) {
    case "TOGGLE_SHOW":
      return state.map(trackShow(action));
    default:
      return state;
  }
};

export default shows;
