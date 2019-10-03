
const initialShows = require('./initialShowState.json');
const shows = (state = initialShows, action) => {
  switch (action.type) {
    case 'TOGGLE_TRACK_SHOWS':
      return state.map((show) => {
        if(show.id === action.id){
          return{
            ...show,
            tracked = !show.tracked
          };
        }
        return show;
      });
    default:
      return state
  }
}

export default shows