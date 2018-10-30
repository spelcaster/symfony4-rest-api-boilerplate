import {
  createStore,
  applyMiddleware
} from 'redux'

import {
  router5Middleware
} from 'redux-router5'

import {
  createLogger
} from 'redux-logger'

import reducers from './reducers/reducers'

import {
  setupSagaMiddleware,
  attachSagas
} from './sagas/saga-middleware.js'

export default function setupStore(router, initialState = {}) {
  const sagaMiddleware = setupSagaMiddleware()

  const createStoreWithMiddleware = applyMiddleware(
    router5Middleware(router),
    sagaMiddleware,
    createLogger()
  )(createStore)

  const store = createStoreWithMiddleware(reducers, initialState)

  // the store must exist before attaching the sagas to the middleware
  attachSagas(sagaMiddleware)

  window.store = store
  return store
}
