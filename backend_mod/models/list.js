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

	// Requête de sujet
    searchTopic : function(information,cb){
        pool.getConnection(function(err, connection){
            if(err) throw err;

            connection.query('SELECT `list`.*, username FROM `list`, `user` WHERE `list`.`userid`=`user`.`id` AND `title` LIKE ?',[information], function(err, result){
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