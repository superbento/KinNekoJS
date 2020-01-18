import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import './Login.css'

class Create extends Component {
  constructor () {
    super()
    this.state = {
      login: '',
      password: ''
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

    axios.post('http://localhost:3001/user/register', { login, password })
      .then((result) => {
        this.props.history.push('/login')
      })
  }

  render () {
    const { login, password } = this.state
    return (
      <div class='container'>
        <form class='form-signin' onSubmit={this.onSubmit}>
          <h2 class='form-signin-heading'>Register</h2>
          <label for='inputEmail' class='sr-only'>Email address</label>
          <input type='email' class='form-control' placeholder='Email address' name='login' value={login} onChange={this.onChange} required />
          <label for='inputPassword' class='sr-only'>Password</label>
          <input type='password' class='form-control' placeholder='Password' name='password' value={password} onChange={this.onChange} required />
          <button class='btn btn-lg btn-primary btn-block' type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default Create
