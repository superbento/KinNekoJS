import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/frontpage/Main'

function App () {
  return (
    <div className='App'>
      <Router>

        <div id='test'>
          <Switch>
            <Route path='/' exact component={Main} />

          </Switch>
        </div>

      </Router>
    </div>
  )
}

export default App
