import { connect } from 'react-redux'
import { toggleShow } from '../actions'
import ShowList from '../components/ShowList/ShowList'


const mapStateToProps = state => ({
  shows: state.shows.filter((show) => show.tracked === false),
  title: 'Untracked'
})

const mapDispatchToProps = dispatch => ({
  onClick: headliner => dispatch(toggleShow(headliner))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowList)