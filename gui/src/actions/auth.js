import {
  API_LOGIN_REQUEST,
  API_LOGOUT_REQUEST
} from '../reducers/auth'

export function doLoginAction (username, password) {
  return {
    type: API_LOGIN_REQUEST,
    payload: { username, password }
  }
}

export function doLogoutAction () {
  return {
    type: API_LOGOUT_REQUEST
  }
}
