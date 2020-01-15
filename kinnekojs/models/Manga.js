const mongoose = require('mongoose')
const Schema = mongoose.Schema
let url = "mongodb://localhost:27017/KinNeko" // 本地数据库地址

mongoose.connect(url)



let mangaSchema = new Schema({
    author: { type: String, require: true },
    title: { type: String, require: true },
    content: { type: String, required: true },
    folioNumber: { type: String, require: true },
    folio: [{
        MangaUrl: { type: String, required: false }
    }],
    comments: [{
        comment: { type: String, required: false },
        date: { type: Date, default: Date.now }
    }]
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports.create = async function (author, title, content, folioNumber) {

    try {
        const manga = new Manga({
            author: author,
            title: title,
            content: content,
            folioNumber: folioNumber,
            folio:[],
            comments: []
        })
        await manga.save()
        return { status: true, mangaId: manga._id, error: '' }
    } catch (err) {
        return { status: false, mangaId: null, error: 'can not create the manga, error: ' + err }
    }
}

module.exports.delete = async function (_id) {
    try {
        await Manga.deleteOne({ _id: _id })
        return { status: true }
    } catch (err) {
        console.log('console.log can not find any manga')
        return ({ status: false, error: err })
    }
}

module.exports.find = async function () {
    try {
        const mangas = await Manga.find({}).sort({ dateCreate: 'desc' }).exec()
        return { mangas: mangas, error: '' }
    } catch (err) {
        console.log('can not find any manga')
        return { mangas: null, error: 'can not find any manga' }
    }
}

module.exports.findByAuthor = async function (author) {
    try {
        const mangas = await Manga.find({author: author}).sort({ dateCreate: 'desc' }).exec()
        if(mangas == ""){
            return { mangas: mangas, status: false, error: 'mangas is null' }
        }
        return { mangas: mangas, status: true, error: '' }
    } catch (err) {
        console.log('can not find any manga')
        return { mangas: null, status: false, error: 'can not find any manga' }
    }
}

module.exports.findByTitle = async function (title) {
    try {
        const mangas = await Manga.find({title: title}).sort({ dateCreate: 'desc' }).exec()
        if(mangas == ""){
            return { mangas: mangas, status: false, error: '' }
        }
        return { mangas: mangas, status: true, error: '' }
    } catch (err) {
        console.log('can not find any manga')
        return { mangas: null, status: false, error: 'can not find any manga' }
    }
}

//根据ID寻找
module.exports.findOne = async function (_id) {
    try {
        const manga = await Manga.findOne({ _id: _id })
        if (manga === null) {
            return { manga: manga, status: false, error: 'can not find any manga' }
        }
        return { manga: manga, status: true, error: '' }
    } catch (err) {
        console.log('can not find this topic' + _id)
        return { manga: null, status: false, error: 'can not find any manga' }
    }
}


//更新评论
module.exports.addCommentByID = async function (_id,comment) {
    try {
        const manga = await Manga.updateOne({_id: _id},{$push:{comments:{comment:comment,date:Date.now()}}})
        return { manga: manga, status: true, error: '' }

    } catch (err) {
        console.log('can not find this topic' + _id)
        return {manga: null, status: false, error: 'can not find this manga'}
    }
}

//添加照片
module.exports.updateByID = async function (_id,mangaUrl) {
    try {
        const manga = await Manga.updateOne({_id: _id},{$push:{folio:{mangaUrl}}})
        return { manga: manga, status: true, error: '' }

    } catch (err) {
        console.log('can not find this topic' + _id)
        return {manga: null, status: false, error: 'can not find this manga'}
    }
}

module.exports.Manga = Manga
