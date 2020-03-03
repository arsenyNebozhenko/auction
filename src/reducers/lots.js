import { UPDATE_ITEM_PROP } from '../actions/types'

const initialState = [
  {
    id: 0,
    title: 'Title 1',
    price: 100,
    add: ''
  },
  {
    id: 1,
    title: 'Title 2',
    price: 50,
    add: ''
  },
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
    default:
      return state
  }
}

export default lots
