import { GET_ALL_ITEMS, ADD_ITEM } from '../actions/actions.js'


const itemReducer = (state = [], action) => {
  console.log('REDUCER ACTION: ', action)
  console.log('CURRENT STATE:', state)
  // {type: 'GET_ALL_ITEMS', payload: [{xxx},{xxx},{xxx}]}
  switch (action.type) {
    case GET_ALL_ITEMS:
    console.log('action.payload in GET_ALL_ITEMS reducer', action.payload)
      return action.payload
    case ADD_ITEM:
      return [...state, action.payload]
    default:
      return state
  }
}

export default itemReducer