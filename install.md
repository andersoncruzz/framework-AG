Clone do repositório remoto <br>
$ git clone https://github.com/andersoncruzz/framework-AG.git <br><br>

Instalando última versão do nodejs e npm <br>
$ sudo apt-get update <br>
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - <br>
$ sudo apt-get install -y nodejs <br>
$ sudo apt-get install -y build-essential <br><br>


Navegue até o repositório remoto: <br>
$ cd framework-AG/ <br><br>

Instalando deendências: <br>
$ npm install package.json <br><br>


Instale mysql-client, mysql-server, apache2, phpmyadmin.
Garante que isso esteja funcionando normalmente.
Importe o arquivo o db.sql para o mysql e crie um banco de dados chamado "casadocodigo"
Você pode mudar os arquivos de acesso ao banco de dados em: app > infra >  connectionFactory.js 

<br><br><br>

Comando para iniciar o servidor: <br>
$ node app.js <br><br>

1) Você pode acessar no navegador (deveria ser listado todos os items que estão no banco de dados na tabela livros): <br>
http://localhost:3000/produtos <br><br>

2) Você pode acessar no navegador (deveria ser mostrado o formulário de cadastro no livro): <br>
http://localhost:3000/produtos/form <br><br>


Qualquer erro eventual é por causa do banco de dados que não está funcionando correto.
Isto é, você não fez o import correto do db.sql para o mysql, 
ou a instação de npm install package.json não foi instalado todos os pacotes.

