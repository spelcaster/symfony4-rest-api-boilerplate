export const API_LOGIN_REQUEST = 'API_LOGIN_REQUEST'
export const API_LOGIN_SUCCESS = 'API_LOGIN_SUCCESS'
export const API_LOGIN_FAILURE = 'API_LOGIN_FAILURE'
export const API_LOGOUT_REQUEST = 'API_LOGOUT_REQUEST'
export const API_LOGOUT_SUCCESS = 'API_LOGOUT_SUCCESS'

const initialState = {
  isFetching: false,
  isAuthenticated: true,
  token: null,
  error: null
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case API_LOGIN_REQUEST:
      return { ...state, isFetching: true, error: null }
    case API_LOGIN_SUCCESS:
      return { ...state, isFetching: false, isAuthenticated: true, token: action.token }
    case API_LOGIN_FAILURE:
      return { ...state, isFetching: false, error: action.error }
    case API_LOGOUT_REQUEST:
      return { ...state, isFetching: true, error: null }
    case API_LOGOUT_SUCCESS:
      return { ...initialState }
    default:
      return state
  }
}
