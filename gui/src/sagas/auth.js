import {
  call,
  put,
  take
} from 'redux-saga/effects'

import {
  actions
} from 'redux-router5'

import {
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAILURE,
  API_LOGOUT_REQUEST,
  API_LOGOUT_SUCCESS
} from '../reducers/auth'

import api from '../api'

function doLogin (username, password) {
  const headers = api.createBasicAuthHeader(username, password)
  const url = '/api/auth'

  return api.post(url, {}, headers)
}

function * authenticate ({ payload }) {
  try {
    const { username, password } = payload
    const response = yield call(doLogin, username, password)
    yield put({ type: API_LOGIN_SUCCESS, token: response.data.token })
    return response.data.token
  } catch (error) {
    yield put({ type: API_LOGIN_FAILURE, error })
  }
}

function * deauthenticate () {
  yield put({ type: API_LOGOUT_SUCCESS })
}

export function * loginFlowSaga () {
  while (true) {
    const action = yield take(API_LOGIN_REQUEST)
    const token = yield call(authenticate, action)

    if (token) {
      yield put(actions.navigateTo('home'))
      yield take(API_LOGOUT_REQUEST)
      yield call(deauthenticate)
    }
  }
}
