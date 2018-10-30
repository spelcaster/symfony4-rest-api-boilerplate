import React from 'react'
import { connect } from 'react-redux'
import { createRouteNodeSelector } from 'redux-router5'
import { startsWithSegment } from 'router5-helpers'

import './App.css'
import Home from './Home'
import Login from './Login'

function App({ route, isAuthenticated }) {
  const { params, name } = route
  const testRoute = startsWithSegment(name)

  if (!isAuthenticated) {
    return <Login params={ params } />
  } else if (testRoute('home')) {
    return <Home params={ params } />
  } else if (testRoute('login')) {
    return <Login params={ params } />
  }

  return null
}

export default connect(state => {
  const routeNodeSelector = createRouteNodeSelector('')

  return (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    ...routeNodeSelector(state)
  })
})(App)
