var mongoose = require('mongoose') // 引入 mongoose
var url = "mongodb://localhost:27017/KinNeko"; // 本地数据库地址
mongoose.connect(url)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successful connection to "+url)
});
var Schema = mongoose.Schema

let user = {
    name:String
}

var userSchema = Schema(user)
var User = mongoose.model('User', userSchema);

var newUser = new User({name: "yyyyyyyyyyyy"})
newUser.save()
