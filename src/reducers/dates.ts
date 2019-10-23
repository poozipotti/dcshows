import { number } from "prop-types";

const today = new Date();
interface date {
  month: number;
  year: number;
}
type nullableDate = dateState | null;
interface dateState {
  startDate: date,
  endDate: date,
  selectedDate: nullableDate
}

const initialDates: dateState = {
  startDate: { month: today.getMonth() + 1, year: today.getFullYear() },
  endDate: { 
    month: (today.getMonth() + 4) % 12, 
    year: today.getFullYear() + Math.floor((today.getMonth() + 4) / 12 )},
  selectedDate: null
};
const Months = (state = initialDates, action: any): dateState => {
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
