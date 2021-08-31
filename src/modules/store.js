import { createStore, combineReducers } from 'redux'

import OrdersReducer from './Orders/reducer'

const reducers = {
  orders: OrdersReducer,
}

const store = createStore(combineReducers(reducers))

export default store
