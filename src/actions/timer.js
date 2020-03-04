import { UPDATE_TIMER, TOGGLE_PAUSE_TIMER } from "./types"

export const updateTimer = (value) => ({
  type: UPDATE_TIMER,
  payload: {
    value
  }
})

export const togglePauseTimer = () => ({
  type: TOGGLE_PAUSE_TIMER
})
