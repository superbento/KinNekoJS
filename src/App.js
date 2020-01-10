import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MangaList from './MangaList'
import AddManga from './AddManga'
import EditManga from './EditManga'

function App () {
  return (
    <div className='container'>
      <Router>
        <div className='col-md-6'>
          <h1 className='text-center' style={style}>KinNekoJS</h1>
          <Switch>
            <Route path='/' exact component={MangaList} />
            <Route path='/products' component={MangaList} />
            <Route path='/add-product' component={AddManga} />
            <Route path='/edit-product' component={EditManga} />

          </Switch>
        </div>
      </Router>
    </div>
  )
}

const style = {
  color: 'black',
  margin: '10px'
}

export default App
