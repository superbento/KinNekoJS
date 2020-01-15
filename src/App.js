import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/frontpage/Main'
import Main2 from './components/frontpage/Main2'

function App () {
  return (
    <div className='App'>
      <Router>

        <div id='test'>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/comic' component={Main2} />
          </Switch>
        </div>

      </Router>
    </div>
  )
}

export default App
