let express = require('express');
let router = express.Router();
let async = require('async');

let list_m = require('../models/list');
let multer = require('multer');
let fs = require('fs');
let path = require('path');
let messagePath = path.join(__dirname, '../uploads');

function getdir(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

router.get('/:titleid.html', function(req, res) {
	let titleid = req.params.titleid || 1;

	fs.readdir(messagePath,function(err,files){
	    if(err){
	        console.log(err);
	        return;
	    }
	    var count = files.length;
	    
	    async.parallel([
			function(async){
				list_m.getListById(titleid, function(result){
					async(null, result[0]);
				})
			},
		], function(err, results){
			// console.log( results );
			results.list = files;
			res.render('list', { data:results });
		})
	});

	

});

router.get('/addtopic', function(req, res){
	if(req.session.user){
		let title = req.query.title,
			content = req.query.content,
            userid = req.session.user.userid,
			createtime = new Date();
		let params = {userid:userid, title:title, content:content, createtime:createtime};

		list_m.addTopic(params, function(result){
			// console.log(result);
			if(result.affectedRows){
				res.json({code:0, msg:'Added successfully', data:{url:'/list/'+result.insertId+'.html', title:title, author:req.session.user.username, createtime:createtime}});
			}else{
				res.json({code:2, msg:'Add failed, please try again'})
			}
		});
		
	}else{
		res.json({code:1, msg:'You are not connected'})
	}
})

module.exports = router;