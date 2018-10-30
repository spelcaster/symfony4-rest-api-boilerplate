import createSagaMiddleware from 'redux-saga'

import {
  loginFlowSaga
} from './auth'

function setupSagaMiddleware () {
  const sagaMiddleware = createSagaMiddleware()

  return sagaMiddleware
}

function attachSagas (sagaMiddleware) {
  sagaMiddleware.run(loginFlowSaga)
}

export {
  setupSagaMiddleware,
  attachSagas
}
