let app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');

//new version START
let express = require('express'),
    path = require('path'),
    // favidcon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session');
    multer = require('multer');

let index = require('./routes/index');
    user = require('./routes/user');
    list = require('./routes/list');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'wenzi', // Une chaîne aléatoire de 128 caractères est recommandée
    cookie: { maxAge: 60*60*1000 },
    resave : false,
    saveUninitialized : true
}));

app.use(function(req, res, next){
    // S'il existe dans le cookie, cela signifie qu'il est déjà connecté.
    if( req.session.user ){
        res.locals.user = {
            userid : req.session.user.userid,
            username : req.session.user.username
        }
    }else{
        res.locals.user = {};
    }
    next();
})

// app.use(multer({dest:"./uploads"}).array("myfile"));
var upload = multer({dest:'./uploads'});
app.use(upload.single('myfile'));
app.get('/indexFormFile.html', function (req, res) {
    res.sendFile(__dirname + '/indexFormFile.html');
});
app.post('/indexFormFile.html', function (req, res) {
    let file = req.file,
            name = file.originalname;
        nameArray=name.split('');
        var nameMime=[];
        l=nameArray.pop();
        nameMime.unshift(l);
        while(nameArray.length!=0&&l!='.'){
            l=nameArray.pop();
            nameMime.unshift(l);
        }
        Mime=nameMime.join('');
        // console.log(Mime);
        fs.renameSync('./uploads/'+file.filename,'./uploads/'+ name +'-' + Date.now() +Mime);
        res.send(req.file);
});

app.use('/', index);
app.use('/user', user);
app.use('/list', list);

// Chargement de la page index.html
app.get('/talk', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    });
});

server.listen(3030, () => {
    console.log('Application démarrée sur le port 3030 !')
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    //res.render('error');
});

module.exports = app;