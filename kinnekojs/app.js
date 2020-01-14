var express = require('express')
var session = require('express-session')

var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const users = require('./routes/users.js')

const topic = require('./routes/mangas')

const bodyParser = require('body-parser') // pour parser les requêtes POST

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tp4')

var app = express()

// 允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
      'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods',
      'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.send(200)/* 让options请求快速返回 */
  else next()
})

app.use(bodyParser.urlencoded({ extended: false })) // for simple form posts
app.use(bodyParser.json()) // for API requests

app.use(session({
  secret: 'mydirtylittlesecret',
  name: 'sessId'
}))

app.use('/user', users) // 使用这个路由给user
app.use('/topics', topic)


app.get('/', (req, res) => {
  res.send('ok')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
