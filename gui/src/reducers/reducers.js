import { combineReducers } from 'redux'
import { router5Reducer } from 'redux-router5'

import auth from './auth'

export default combineReducers({
  router: router5Reducer,
  auth
})
