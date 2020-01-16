const mongoose = require('mongoose')
const Schema = mongoose.Schema
const url = 'mongodb://localhost:27017/KinNeko' // 本地数据库地址
mongoose.connect(url)

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = mongoose.model('User', userSchema)

module.exports.find = async function (username, password) {
  try {
    const user = await User.find({ username: username, password: password })
    return { user: user, error: '' }
  } catch (err) {
    console.log('console.log can not find the user')
    return { user: null, error: 'can not find the user' }
  }
}

module.exports.findOne = async function (username) {
  try {
    const user = await User.findOne({ username: username })
    return user
  } catch (err) {
    console.log('can not find the user')
  }
}

module.exports.findPass = async function (username, password) {
  try {
    const user = await User.findOne({ username: username, password: password })
    return user
  } catch (err) {
    console.log('can not find the user')
  }
}

module.exports.insert = async function (username, password) {
  try {
    const user = new User({ username: username, password: password })
    await user.save()
    return { user: user, error: '' }
  } catch (err) {
    console.log(err)
    return { user: null, error: 'can not create the user, error: ' + err }
  }
}

module.exports.User = User
