import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      login: '',
      password: '',
      message: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { login, password } = this.state

    axios.post('http://localhost:3001/user/login', { login, password })
      .then((result) => {
        window.localStorage.setItem('jwtToken', result.data.token)
        this.setState({ message: '' })
        this.props.history.push('/')
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' })
        }
      })
  }

  render () {
    const { login, password, message } = this.state
    return (
      <div class='container'>
        <form class='form-signin' onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class='alert alert-warning alert-dismissible' role='alert'>
              {message}
            </div>}
            <div class="box1"></div>
          <h2 class='form-signin-heading'>Please sign in</h2>
          <label for='inputEmail' class='sr-only'>Email address</label>
          <input type='email' class='form-control' placeholder='Email address' name='login' value={login} onChange={this.onChange} required />
          <label for='inputPassword' class='sr-only'>Password</label>
          <input type='password' class='form-control' placeholder='Password' name='password' value={password} onChange={this.onChange} required />
          <button class='btn btn-lg btn-primary btn-block' type='submit'>Login</button>
          <p>
            Not a member? <Link to='/register'><span class='glyphicon glyphicon-plus-sign' aria-hidden='true' /> Register here</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default Login
