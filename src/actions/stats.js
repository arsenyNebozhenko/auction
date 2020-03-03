import { UPDATE_STATS } from "./types";

export const updateStats = (name, value) => ({
  type: UPDATE_STATS,
  payload: {
    name,
    value
  }
})
