var pool = require('./db'),
	crypto = require('crypto');

module.exports = {
	// Sha1 chiffrement de chaînes
	hash : function(str){
		return crypto.createHmac('sha1', str).update('love').digest('hex');
	},

	// Connexion
	login : function(username, password, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `id` FROM `user` WHERE `username`=? AND `password`=?', [username, password], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		    })
		});
	},

	// Inscription
	reg : function(username, password, regtime, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `id` FROM `user` WHERE `username`=?', [username], function(err, sele_res){
		        if(err) throw err;

		        if(sele_res.length){
		        	cb({isExisted:true});
		        	connection.release();
		        }else{
		        	var params = {username:username, password:password, regtime:regtime};
		        	connection.query('INSERT INTO `user` SET ?', params, function(err, insert_res){
				        if(err) throw err;

				        cb(insert_res);
				        connection.release();
				    })
		        }
		    })
		});
	},
    //Modify
    mod : function(username, old_password, new_password, cb){ //User modify person information
        pool.getConnection(function(err, connection){
            if(err) throw err;

            connection.query('SELECT `id` FROM `user` WHERE `username`=? AND `password`=?', [username, old_password], function(err, log_result){
                if(err) throw err;

                if(log_result.length)
				{
                    connection.query('UPDATE `user` SET `password`=? WHERE `username`=?', [new_password,username], function(err, mod_result){
                        if(err) throw err;

                        cb(mod_result);
                        connection.release();
                    })
				}else{
                    cb({isExisted:false});
                    connection.release();
				}
            })

        });
    }
}