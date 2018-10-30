import React from 'react'
import { connect } from 'react-redux'
import { createRouteNodeSelector } from 'redux-router5'
import { BaseLink } from 'react-router5'

import { doLogoutAction } from './actions/auth'

function Home({ router, logout }) {
  return (
    <div className='home'>
      <nav>
        <BaseLink
          router={router}
          routeName='login'
          routeOptions={{
            reload: true
          }}
          onClick={logout}
        >
          Logout
        </BaseLink><br />
      </nav>
    </div>
  )
}

const mapStateToProps = state => {
  const nodeSelector = createRouteNodeSelector('home')

  return state => ({
    route: state.router.route,
    ...nodeSelector(state)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(doLogoutAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
