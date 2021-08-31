import { ADD_ORDER, SEARCH_ORDER, DELETE_ORDER } from './constans'

const createOrder = newOrder => ({
  type: ADD_ORDER,
  payload: newOrder,
})
const searchOrder = query => ({
  type: SEARCH_ORDER,
  payload: query,
})
const deleteOrder = id => ({
  type: DELETE_ORDER,
  payload: id,
})

export default { createOrder, searchOrder, deleteOrder }
