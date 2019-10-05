const today = new Date();

const initialDates = {
  startDate: { month: today.getMonth() + 1, year: today.getFullYear() },
  endDate: { month: (today.getMonth() + 4) %12 , year: today.getFullYear() +parseInt((today.getMonth() + 4)/12)},
  selectedDate: null
};
const Months = (state = initialDates, action) => {
  switch (action.type) {
    case "CHANGE_DATE":
      if (
        state.selectedDate &&
        JSON.stringify(state.selectedDate) === JSON.stringify(state.startDate)
      ) {
        return {
          ...state,
          startDate: action.date,
          selectedDate: null
        };
      } else if (
        state.selectedDate &&
        JSON.stringify(state.selectedDate) === JSON.stringify(state.endDate)
      ) {
        return {
          ...state,
          endDate: action.date,
          selectedDate: null
        };
      } else {
        return state;
      }
    case "SELECT_DATE":
      return {
        ...state,
        selectedDate: action.date
      };
    default:
      return state;
  }
};

export default Months;
