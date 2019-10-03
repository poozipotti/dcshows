const initialShows = require('./initialShowState.json');
const shows = (state = initialShows, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return state.map((show) => {
        if(show.headliner === action.headliner){
          return{
            ...show,
            tracked : !show.tracked
          };
        }
        return show;
      });
    default:
      return state
  }
}

export default shows