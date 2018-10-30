import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createRouteNodeSelector
} from 'redux-router5'

import { doLoginAction } from './actions/auth'

class Login extends Component
{
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const field = event.target.name

    if (!field || !this.state.hasOwnProperty(field)) {
      return;
    }

    let data = {}
    data[event.target.name] = event.target.value

    this.setState(data);
  }

  login = () => {
    const { login } = this.props
    const { username, password } = this.state

    login(username, password)
  }

  render() {
    return (
      <form className='form-signin'>
        <h2 className='form-signin-heading'>Symfony4 REST API</h2>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          className='form-control'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          className='form-control'
        />
        <button
          onClick={this.login}
          type='button'
          className='btn btn-primary btn-block'
        >
          Login
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  const nodeSelector = createRouteNodeSelector('login')
  return state => ({
    isFetching: state.auth.isFetching,
    ...nodeSelector(state)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    login: (...params) => dispatch(doLoginAction(...params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
