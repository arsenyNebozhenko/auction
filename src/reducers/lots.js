import { UPDATE_ITEM_PROP, ADD_LOT } from '../actions/types'

const initialState = [
  {
    id: 0,
    title: '',
    price: '',
    add: ''
  },
  {
    id: 1,
    title: '',
    price: '',
    add: ''
  },
  {
    id: 2,
    title: '',
    price: '',
    add: ''
  },
  {
    id: 3,
    title: '',
    price: '',
    add: ''
  }
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
        {
          id: Math.random(),
          title: '',
          price: '',
          add: ''
        }
      ]
    default:
      return state
  }
}

export default lots
