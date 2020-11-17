const server = require('express').Router()
const { MP } = require('../controllers/mercadopago')

server.post('/', MP)

module.exports = server