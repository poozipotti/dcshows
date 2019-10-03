const initialShows = require('./initialShowState.json');
const today = new Date();
const initialMonth = {
  startMonth = today.Month,
  endMonth = (today.Month + 6) % 12,
}
const Months = (state= initialMonth, action) => {
  switch (action.type) {
    case 'CHANGE_START_MONTH':
      return {
        ...state,
        startMonth = action.Month
      }
    case 'CHANGE_END_MONTH':
      return {
        ...state,
        endMonth = action.Month
      }
    default:
      return state
  }
}

export default shows