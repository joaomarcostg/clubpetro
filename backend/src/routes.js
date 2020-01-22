const express = require('express')

const VendaController = require('./controllers/VendaController.js')
const ClienteController = require('./controllers/ClienteController.js')
const FrentistaController = require('./controllers/FrentistaController.js')

const routes = express.Router()


//fiz rotas auxiliares para registrar clientes e frentistas afim de testar minha api

routes.post('/clientes', ClienteController.store)
routes.get('/clientes', ClienteController.list)
routes.get('/clientes/:idc', ClienteController.index)
routes.post('/frentistas', FrentistaController.store)
routes.get('/frentistas', FrentistaController.list)
routes.get('/frentistas/:idf', FrentistaController.index)
routes.post('/frentistas/:idf/vendas', VendaController.store)
routes.get('/frentistas/:idf/vendas', FrentistaController.vendas)
routes.get('/frentistas/:idf/vendas/:idv', VendaController.index)
routes.get('/vendas', VendaController.list)
routes.get('/vendas/:idv', VendaController.index)

module.exports = routes