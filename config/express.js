var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function (){
	console.log("modulo carregado");

	var app = express();

	app.use('/css', express.static('./app/views/css'));
	app.use('/font', express.static('./app/views/font'));
	app.use('/images', express.static('./app/views/images'));
	app.use('/js', express.static('./app/views/js'));

	
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(expressValidator());
	//req  -> middlewareBodyParsers -> middlewareAutenticao -> funcao que trata a requisicao

	load('routes', {cwd: 'app'})
	.then('infra')
	.into(app);


	return app;
};