var mysql = require('mysql');

//FACTORY METHOD
function createDBConnection () {
	if(!process.env.NODE_ENV){
		return mysql.createConnection({
			host : 'localhost',
			user: 'root',
			password : 'root',
			database : 'casadocodigo'

		});
	}
	
	if(process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host : 'localhost',
			user: 'root',
			password : 'root',
			database : 'casadocodigo_test'

		});
	}
}

//Wrapper
module.exports = function(){
	return createDBConnection;
}