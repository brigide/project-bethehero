const express = require('express'); // importando o modulo "express" para a variavel express

//importando modulo de seguranca cors
const cors = require('cors');

//Importando as rotas de routes.js
const routes = require('./routes');

const app = express(); // variavel para armazenar a aplicacao

app.use(cors());

//Dizer ao programa que utilizaremos json para requisicoes
app.use(express.json());

/**
 * Metodos HTTP:
 * 
 * GET: Buscar informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros
  * 
  * Query: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
  * Route: Parametros utilizados para identificar rescursos
  * Body: Corpo da requisicao, utilizando para criar ou alterar recursos
  * 
  */

  /**
   * Banco de dados
   * 
   * SQL: MySQL, SQLite, Oracle, MS SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

app.use(routes);



app.listen(3333); // definindo a porta da aplicacao