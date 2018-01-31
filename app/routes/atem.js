module.exports = function(app){

	app.get('/atem/login', function(req,res){
		res.render('atem/login');
	});

	app.get('/atem/drive', function(req,res){
		res.render('atem/drive');
	});

}
