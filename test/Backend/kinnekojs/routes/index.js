
var app = require('express')()
var http = require('http').createServer(app)

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>')
})


