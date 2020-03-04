import { UPDATE_TIMER, TOGGLE_PAUSE_TIMER } from "../actions/types"

const initialState = {
  timeLeft: 600000,
  isPaused: true
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        timeLeft: action.payload.value
      }
    case TOGGLE_PAUSE_TIMER:
      return {
        ...state,
        isPaused: !state.isPaused
      }
    default:
      return state
  }
}

export default timer
