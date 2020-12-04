const server = require('express').Router()
const { startClass } = require('../controllers/startClass')

server.post('/', startClass)

module.exports = server