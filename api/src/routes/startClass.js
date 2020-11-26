const server = require('express').Router()
const { startClass } = require('../controllers/startClass')

server.get('/', startClass)

module.exports = server