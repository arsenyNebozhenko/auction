import { UPDATE_TIME, UPDATE_MONEY } from "../actions/types"

const initialState = {
  time: 0,
  money: 0
}

const stats = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        time: action.payload.value
      }
    case UPDATE_MONEY:
      return {
        ...state,
        money: action.payload.value
      }
    default:
      return state
  }
}

export default stats
