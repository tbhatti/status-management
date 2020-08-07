import { createStore, combineReducers, applyMiddleware } from 'redux'
import statusReducer from './reducers/status'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    statusReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;