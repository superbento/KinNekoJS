import React from 'react'
import './App.css'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/frontpage/Main'
// import Header from './components/frontpage/Header'

function App () {
  return (
    <div className='App'>
      <Router>
        <div className='col-md-6'>
          <Switch>
            <Route path='/' exact component={Main} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
