import { connect } from 'react-redux'
import TimeLine from '../components/TimeLine/Timeline'

const allRequiredMonths = () => {
  let months = [];
  for(let i=1;i<=12;i++){
    months.push({month:i});
  }
  return months;
}

const mapStateToProps = state => ({
  months: allRequiredMonths(),
  ...state.months 
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeLine)