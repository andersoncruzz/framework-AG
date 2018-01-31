//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){

	var listaProdutos = function(req,res, next){
		//res.send("<html><body><h1>Listagem de produtos</h1></body></html>");
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

       produtosDAO.lista(function(err,results){
           if(err){
           		return next(err);
           }

           res.format({
           	html: function(){
           		res.render('produtos/lista', {lista:results});
           	},
           	json: function(){
           		res.json(results);
           	}
           });
           //console.log(err);
        });

        connection.end();


		console.log("atendendo a requisicao");
		//res.render("produtos/lista");
	};

	var listaProdutosJson = function(req,res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

       produtosDAO.lista(function(err,results){
           res.json(results);
        });

        connection.end();


		console.log("atendendo a requisicao");
	};


	app.get('/produtos',listaProdutos); 

	//app.get('/produtos/json',listaProdutosJson); 

	app.get('/produtos/form', function(req,res){
		res.render('produtos/form', {errosValidacao:{}, produto:{}});
	});

	app.post('/produtos', function(req,res){
		
		var produto = req.body;
		console.log(produto);

		//validando o form
		req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();

		var erros = req.validationErrors();

		if(erros){
		res.format({
           	html: function(){
           		res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto});
           	},
           	json: function(){
           		res.status(400).json(erros);
           	}
           });

			return;
		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(erros, resultados){
			console.log(erros);
			res.redirect('/produtos');

		});

	});
}
