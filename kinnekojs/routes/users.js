const express = require('express')

// chargement du modèle User
const User = require('../models/User.js') // User类

const router = express.Router()

const users = []
users.push({ id: '1', login: 'biao', name: 'biao', password: '12345' })
users.push({ id: '2', login: 'shuo', name: 'xiage', password: '12345' })
router.post('/login', (req, res) => {
  const { login, password } = req.body // fields from the POST request
  if (req.session.userId) { // if userId has already been defined
    res.status(401) //   we know that a previous login request
    res.send('you are already connected') //   has already succeeded
    return
  }
  // else, we verify the fields against users
  const user = users.find(u => u.login === login && u.password == password)
  if (user) { // if the user if found
    req.session.userId = user.id // define the userId field of the session
    res.send('OK')
    return
  }
  res.status(401)
  res.send('didn’t find any user matching your id and password')
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('logout successful')
})

router.post('/register', async (req, res) => {
  const { login, password } = req.body // fields from the POST request
  const result = await User.insert(login, password)
  res.json(result)
})

module.exports = router
