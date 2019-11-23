var pool = require('./db');

var func = {
	// Obtenez le thème de la page d'accueil
	getIndexList : function(cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `list`.*, username FROM `list`, `user` WHERE `list`.`userid`=`user`.`id`', function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	},

	// Interroger les détails du sujet en fonction de l'id
	getListById : function(id, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT * FROM `list` WHERE `id`=?', [id], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	},

	// Répondre à un sujet
	getReplyById : function(titleid, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT * FROM `reply` WHERE `titleid`=?', [titleid], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	},

	/*
		Ajouter une réponse
		titleid, userid, content, createtime
	*/
	addReply : function(params, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('INSERT INTO `reply` SET ?', params, function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	},

	/*
		Ajouter un sujet
		userid, title, content, createtime
	*/
	addTopic : function(params, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('INSERT INTO `list` SET ?', params, function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	}
}
module.exports = func;