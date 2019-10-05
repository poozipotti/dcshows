import { connect } from "react-redux";
import { toggleShow } from "../actions";
import ShowList from "../components/ShowList/ShowList";

const showWithinDateFilter = ((show, state) => {
  return (
    parseInt(show.year + "" + show.month.toString().padStart(2,'0')) >=
      parseInt(state.dates.startDate.year + "" + state.dates.startDate.month.toString().padStart(2,'0')) &&
    parseInt(show.year + "" + show.month) <=
      parseInt(state.dates.endDate.year + "" + state.dates.endDate.month.toString().padStart(2,'0'))
  );
})

const mapStateToProps = state => ({
  shows: state.shows.filter(show => show.tracked === false && showWithinDateFilter(show,state)),
  title: "Untracked"
});

const mapDispatchToProps = dispatch => ({
  onClick: headliner => dispatch(toggleShow(headliner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowList);
