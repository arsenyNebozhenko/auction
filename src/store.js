import rootReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'

const initialState = {}
const middleware = []

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
