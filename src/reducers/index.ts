import { combineReducers } from 'redux'
import shows from './shows'
import dates from './dates'

export default combineReducers({
  shows,
  dates
})