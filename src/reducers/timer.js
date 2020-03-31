import { UPDATE_TIMER_PROP } from "../actions/types"

const initialState = {
  timeLeft: 600000,
  isPaused: true
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIMER_PROP:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state
  }
}

export default timer
