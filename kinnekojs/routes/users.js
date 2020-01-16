const express = require('express')
const crypto = require('crypto')
const User = require('../models/User.js') // User类

const router = express.Router()

router.post('/login', async(req, res) => {
  const md5 = crypto.createHash('md5')
  const newPas = md5.update(req.body.password).digest('hex')

  if (req.session.userId) { // if userId has already been defined
    res.status(401) //   we know that a previous login request
    res.send('you are already connected') //   has already succeeded
    return
  }

  const user = await User.findPass(req.body.login, newPas)

  if (user) { // if the user if found
    req.session.userId = user.toString()// define the userId field of the session
    res.send('OK'+ user)
    return
  }
  res.status(401)
  res.send('didn’t find any user matching your id and password:' + newPas)
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.send('logout successful')
})

router.post('/register', async (req, res) => {
  const md5 = crypto.createHash('md5')
  const newPas = md5.update(req.body.password).digest('hex')
  const result = await User.insert(req.body.login, newPas)
  await res.json(result)
})

module.exports = router
