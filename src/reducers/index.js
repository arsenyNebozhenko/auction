import { combineReducers } from 'redux'

import timer from './timer'
import lots from './lots'

const rootReducer = combineReducers({
  timer,
  lots
})

export default rootReducer
