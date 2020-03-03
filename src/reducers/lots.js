import { UPDATE_ITEM_PROP, ADD_LOT } from '../actions/types'
import { v4 as uuid } from 'uuid'

class Lot {
  constructor() {
    this.id = uuid()
    this.title = ''
    this.price = ''
    this.add = ''
  }
}

const initialState = [
  new Lot(),
  new Lot(),
  new Lot(),
  new Lot()
]

const lots = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_PROP:
      const newState = state.map(item => item.id === action.payload.id ? {
        ...item,
        [action.payload.name]: action.payload.value
      } : item)

      if (action.payload.sort) {
        return newState.sort((itemA, itemB) => itemB.price - itemA.price)
      }

      return newState
    case ADD_LOT:
      return [
        ...state,
        new Lot()
      ]
    default:
      return state
  }
}

export default lots
