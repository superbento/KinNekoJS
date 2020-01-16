const express = require('express')
let mongoose = require('mongoose') // 引入 mongoose
let url = 'mongodb://localhost:27017/KinNeko' // 本地数据库地址
mongoose.connect(url)

const mangaUrl = 'http://localhost:3001/Manga/1530261[BLACKSAW]/'

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Successful connection to ' + url)
})

//const User = require('../models/User.js')
const Mangas = require('../models/Manga')

const router = express.Router()

router.get('/test_add', async (req, res) => {
  await Mangas.create('GreenTeaNeko', 'MON GIRL 4koma', '915558', 98)
  await res.json('ok')
})

router.post('/', async (req, res) => {
  if (req.body.title == null) {
    res.status(400).send('title is required')
    return // 需要return停止
  }

  const result = await Mangas.create(req.body.author, req.body.title, req.body.content, req.body.folioNumber)
  await Mangas.addCommentByID(result.mangaId, '')
  for (let i = 1; i <= req.body.folioNumber; i++) {
    const num = i
    await Mangas.updateByID(result.mangaId, mangaUrl + num.toString().padStart(8, '0') + '.jpg')
  }

  if (result.status === false) {
    res.status(400).send(result)
  } else {
    await res.json({ result })
  }
})

// 获得话题列表
router.get('/', async (req, res) => {
  const topics = await Mangas.find()
  await res.json(topics)
})

// 获得单个话题
router.get('/:topicId', async (req, res) => {
  const result = await Mangas.findOne(req.params.topicId)
  if (result.status === true) {
    await res.json(result)
  } else {
    res.status(400).send(result)
  }
})

// 根据作者搜索漫画
router.post('/searchByAuthor', async (req, res) => {
  const result = await Mangas.findByAuthor(req.body.author)
  if (result.status === true) {
    await res.json(result)
  } else {
    res.status(400).send(result)
  }
})

// 根据标题搜索漫画
router.post('/searchByTitle', async (req, res) => {
  const result = await Mangas.findByTitle(req.body.title)
  if (result.status === true) {
    await res.json(result)
  } else {
    res.status(400).send(result)
  }
})

// 删除
router.delete('/:topicId', async (req, res) => {
  const result = await Mangas.delete(req.params.topicId)
  if (result.status === true) {
    await res.json({ status: 'ok' })
  } else {
    res.status(400).send(result)
  }
})

// 添加评论
router.post('/:topicId/addComment', async (req, res) => {
  const result = await Mangas.addCommentByID(req.params.topicId, req.body.comment)
  if (result.status === true) {
    await res.json({ status: 'ok' })
  } else {
    res.status(400).send(result)
  }
})

// 添加漫画
router.post('/:topicId/addMangaPage', async (req, res) => {
  const result = await Mangas.addCommentByID(req.params.topicId, req.body.url)
  if (result.status === true) {
    await res.json({ status: 'ok' })
  } else {
    res.status(400).send(result)
  }
})

module.exports = router
