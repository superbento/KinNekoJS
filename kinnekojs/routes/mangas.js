const express = require('express')
const mongoose = require('mongoose')

const User = require('../models/User.js')
const Mangas = require('../models/Manga')

const router = express.Router()


router.get('/test_add', async (req, res) => {
    await Mangas.create('为什么我能在《死亡搁浅》的世界里逗留100小时？', '游研社： 我已经是30万赞的搁浅KOL了。 文 / 嘤肉卫星 看到这篇文章的时候，应该有不少玩家已经走上了“快递”或者“云快递”之旅了，对于《死亡搁浅》到底长什么样、怎么玩，应该也有了自己的理解。 我知道对于…')
    res.json('ok')
})

// 添加topic
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
