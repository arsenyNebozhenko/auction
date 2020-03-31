import { UPDATE_TIMER_PROP } from "./types"

export const updateTimerProp = (key, value) => ({
  type: UPDATE_TIMER_PROP,
  payload: {
    key,
    value
  }
})
