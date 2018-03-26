Clone do repositório remoto
$ git clone https://github.com/andersoncruzz/framework-AG.git

Instalando última versão do nodejs e npm
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential


Navegue até o repositório remoto:
$ cd framework-AG/

Instalando deendências:
$ npm install package.json


Instale mysql-client, mysql-server, apache2, phpmyadmin.
Garante que isso esteja funcionando normalmente.
Importe o arquivo o db.sql para o mysql e crie um banco de dados chamado "casadocodigo"
Você pode mudar os arquivos de acesso ao banco de dados em: app > infra >  connectionFactory.js


Comando para iniciar o servidor:
$ node app.js

1) Você pode acessar no navegador (deveria ser listado todos os items que estão no banco de dados na tabela livros):
http://localhost:3000/produtos

2) Você pode acessar no navegador (deveria ser mostrado o formulário de cadastro no livro):
http://localhost:3000/produtos/form


Qualquer erro eventual é por causa do banco de dados que não está funcionando correto.
Isto é, você não fez o import correto do db.sql para o mysql, 
ou a instação de npm install package.json não foi instalado todos os pacotes.

