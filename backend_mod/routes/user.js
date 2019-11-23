let express = require('express');
let router = express.Router();
let user_m = require('../models/user');

// Aller directement à la page d'accueil
router.get('/', function(req, res, next) {
    res.render('index', { title: 'user' }); // Chargez le modèle index.ejs et transmettez les données au modèle.
});


// Aller à la page de connexion
router.get('/login', function(req, res, next) {
    res.render('login', {errmsg:''});
});

// Traitement des demandes de connexion
router.post('/login', function(req, res, next) {
    let username = req.body.username || '',
        password = req.body.password || '';

    let password_hash = user_m.hash(password);//Encrypted password

    user_m.login(username, password_hash, function(result){
        if(result.length){
            req.session.user = {
                userid : result[0].id,
                username : username
            }
            res.redirect('/');
        }else{
            res.render('login', {errmsg:'UserName or Password is incorrect'});
        }
    });
});

// Afficher la page d'inscription
router.get('/reg', function(req, res, next){
    res.render('reg', {errmsg:''});// Charger le modèle reg.ejs
});

// Traitement des données d'enregistrement
router.post('/reg', function(req, res, next){
    let username = req.body.username || '',
        password = req.body.password || '',
        password2 = req.body.password2 || '';

    if(password!=password2){
        res.render('reg', {errmsg:'Inconsistent password'});
        return;
    }
    let password_hash = user_m.hash(password),
        regtime = Date.now();
    user_m.reg(username, password_hash, regtime, function(result){
            if(result.isExisted){
            res.render('reg', {errmsg:'Username already registered'});
        }else if(result.affectedRows){
                req.session.user = {
                userid  : result.insertId,
                username : username
            }
            res.redirect('/');
        }else{
            // console.log('Échec de la connexion');
            res.render('reg', {errmsg:'Registration failed, please try again'});
        }
    });
});

//user modify personal information
router.get('/modify', function(req, res, next) {
    res.render('mod', {errmsg:''});
});

// Traitement des demandes de connexion
router.post('/modify', function(req, res, next) {
    //console.log(req.session.user.username, req.body.password);
    let username = req.session.user.username || '',
        password = req.body.password || '',
        password1 = req.body.password1 || '',
        password2 = req.body.password2 || '';

    if (password1 != password2) {
        res.render('mod', {errmsg: 'Inconsistent new password'});
        return;
    }
    var oldpassword_hash = user_m.hash(password);//Encrypted password
    var password_hash = user_m.hash(password1);//Encrypted password

    user_m.mod(username,oldpassword_hash, password_hash, function (result) {
        if(result.isExisted){
            res.render('mod', {errmsg:'The original password was entered incorrectly.'});
        }else if(result.affectedRows) {
                    req.session.user = {
                       // userid: result[0].id,
                        username: username
                    }
                    res.redirect('/user/login');
        }else{
            res.render('mod', {errmsg: 'Password modification failed'});
        }
    });
});

// Déconnexion
router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.redirect('/user/login');
})

module.exports = router;