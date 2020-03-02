import { combineReducers } from 'redux'

import timer from './timer'
import lots from './lots'
import stats from './stats'

const rootReducer = combineReducers({
  timer,
  lots,
  stats
})

export default rootReducer
