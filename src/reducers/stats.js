import { UPDATE_STATS } from "../actions/types"

const initialState = {
  time: 0,
  money: 0
}

const stats = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATS:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default stats
