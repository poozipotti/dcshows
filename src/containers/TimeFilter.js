import { connect } from "react-redux";
import TimeLine from "../components/TimeLine/Timeline";
import { selectDate,changeDate } from '../actions'

const getRequiredDates = state => {
  let showDates = state.shows
    .map(show => {
      return {
        month: show.month,
        year: show.year
      };
    })
    .sort((a, b) => {
      return parseInt(a.year + "" + a.month.toString().padStart(2,'0')) > parseInt(b.year + "" + b.month.toString().padStart(2,'0'))
        ? 1
        : -1;
    });
  showDates = [showDates[0], showDates[showDates.length - 1]].reduce(
    (allDates, currentdate) => {
      if (allDates.length === 0) {
        return [currentdate];
      } else {
        let numberOfMonths =
          12 * (currentdate.year - allDates.slice(-1)[0].year);
        numberOfMonths += currentdate.month - allDates.slice(-1)[0].month;
        let allDatesFilled = [...new Array(numberOfMonths)].map(
          (fillDate, index) => {
            let newMonth = allDates.slice(-1)[0].month + index;
            return {
              month: (newMonth % 12)+1,
              year: allDates.slice(-1)[0].year + parseInt(newMonth / 12)
            };
          }
        );
        return [...allDates,...allDatesFilled];
      }
    },
    []
  );
  return showDates;
};

const mapStateToProps = state => ({
  dates: getRequiredDates(state),
  ...state.dates
});

const mapDispatchToProps = dispatch => ({
  onClickSelect: date => dispatch(selectDate(date)),
  onClickConfirm: date => dispatch(changeDate(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeLine);
