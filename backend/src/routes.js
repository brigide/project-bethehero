const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rota para login
routes.post('/sessions', SessionController.create);

//rota para listas ongs cadastradas
routes.get('/ongs', OngController.index);
//rota para criacao de uma ong no banco
routes.post('/ongs', OngController.create);

//rota para listagem especificas de um caso de uma ong
routes.get('/profile', ProfileController.index);

//rota para listagem de casos
routes.get('/incidents', IncidentController.index);
//rota para criacao de um caso
routes.post('/incidents', IncidentController.create);
//rota para deletar um caso
routes.delete('/incidents/:id', IncidentController.delete);


//Exportar a rota
module.exports = routes;