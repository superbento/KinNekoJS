let express = require('express');
let router = express.Router();

let list_m = require('../models/list');

router.get('/', function (req, res, next) {
    list_m.getIndexList(function (result) {
        res.render('index', {data: result}); // 选择index模板并传递数据
    })
});

router.get('/searchTopic', function (req, res, next) {
    res.render('search', {errmsg: ''});
});

router.post('/searchTopic', function (req, res, next) {
    let information = req.body.search_text || '';
    //document.write(information);
    list_m.searchTopic(information,function (result) {
        if(result.length){
            res.render('search', {data: result});
        }else
        {
            res.render('search', {errmsg:'No Results'});
        }
    });
});

module.exports = router;