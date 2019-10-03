import { connect } from 'react-redux'
import { toggleShow } from '../actions'
import Billboard from '../components/Billboard/Billboard'


const mapStateToProps = state => ({
  shows: state.shows
})

const mapDispatchToProps = dispatch => ({
  toggleShow: headliner => dispatch(toggleShow(headliner))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Billboard)