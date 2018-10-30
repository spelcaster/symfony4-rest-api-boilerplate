import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import setupRouter from './router'
import setupStore from './store'

const router = setupRouter()
const store = setupStore(router)
const wrappedApp = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <div className='container'>
        <App />
      </div>
    </RouterProvider>
  </Provider>
)

router.start((err, state) => {
  ReactDOM.render(wrappedApp, document.getElementById('root'))
})

registerServiceWorker()
