import { UPDATE_STATS_TIME, UPDATE_STATS_MONEY } from "./types";

export const updateTime = (value) => ({
  type: UPDATE_STATS_TIME,
  payload: {
    value
  }
})

export const updateMoney = (value) => ({
  type: UPDATE_STATS_MONEY,
  payload: {
    value
  }
})
