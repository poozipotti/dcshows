import { connect } from 'react-redux'
import { requestToggleShow } from '../actions'
import ShowList from '../components/ShowList/ShowList'


const mapStateToProps = state => ({
  shows: state.shows.filter((show) => show.tracked === true),
  title: 'Tracked' 
})

const mapDispatchToProps = dispatch => ({
  onClick: (headliner,currentlyTracked) => dispatch(requestToggleShow(headliner,currentlyTracked))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowList)