const express = require('express')

const VendaController = require('./controllers/VendaController.js')
const ClienteController = require('./controllers/ClienteController.js')
const FrentistaController = require('./controllers/FrentistaController.js')

const routes = express.Router()

routes.post('/clientes', ClienteController.store)
routes.post('/frentistas', FrentistaController.store)

// routes.post('/devs', DevController.store)
// routes.post('/devs/:devId/likes', LikeController.store)
// routes.post('/devs/:devId/dislikes', DislikeController.store)


module.exports = routes