import { UPDATE_TIME, UPDATE_MONEY } from "./types";

export const updateTime = (value) => ({
  type: UPDATE_TIME,
  payload: {
    value
  }
})

export const updateMoney = (value) => ({
  type: UPDATE_MONEY,
  payload: {
    value
  }
})
