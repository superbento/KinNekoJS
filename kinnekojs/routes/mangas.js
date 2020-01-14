const express = require('express')
var mongoose = require('mongoose') // 引入 mongoose
var url = "mongodb://localhost:27017/KinNeko" // 本地数据库地址
mongoose.connect(url)

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log("Successful connection to "+url)
})



const User = require('../models/User.js')
const Mangas = require('../models/Manga')

const router = express.Router()


router.get('/test_add', async (req, res) => {
    await Mangas.create("testTitle","This is a test Title","This is a content",6)
    res.json('ok')
})


router.post('/', async (req, res) => {

    if (req.body.title == null) {
        res.status(400).send('title is required')
        return // 需要return停止
    }
    const result = await Mangas.create(req.body.title, req.body.content)
    if (result.status === false) {
        res.status(400).send(result)
    } else {
        res.json({ result })
    }
})

// 获得话题列表
router.get('/', async (req, res) => {
    const topics = await Mangas.find()
    res.json(topics)
})

// 获得单个话题
router.get('/:topicId', async (req, res) => {
    const result = await Mangas.findOne(req.params.topicId)
    if (result.status === true) {
        res.json(result)
    } else {
        res.status(400).send(result)
    }
})

// 删除
router.delete('/:topicId', async (req, res) => {
    // res.json({ status: 'caonimaa' })
    const result = await Mangas.delete(req.params.topicId)
    if (result.status === true) {
        res.json({ status: 'ok' })
    } else {
        res.status(400).send(result)
    }
})


module.exports = router
