const today = new Date();

const initialMonth = {
  startMonth : today.getMonth(),
  endMonth : (today.getMonth() + 6) % 12,
}
const Months = (state= initialMonth, action) => {
  switch (action.type) {
    case 'CHANGE_START_MONTH':
      return {
        ...state,
        startMonth : action.Month
      }
    case 'CHANGE_END_MONTH':
      return {
        ...state,
        endMonth : action.Month
      }
    default:
      return state
  }
}

export default Months