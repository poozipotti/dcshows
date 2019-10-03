const today = new Date();

const initialDates = {
  startDate : {month:today.getMonth()+1 ,year: today.getFullYear()},
  endDate : {month:today.getMonth()+1 ,year: today.getFullYear()+1},
}
const Months = (state= initialDates, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE':
      return {
        ...state,
        startDate : action.date
      }
    case 'CHANGE_END_DATE':
      return {
        ...state,
        endDate : action.date
      }
    default:
      return state
  }
}

export default Months