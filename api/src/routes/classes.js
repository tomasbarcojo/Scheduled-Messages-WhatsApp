const server = require('express').Router()
const { getClasses, createClass, modifyClass, deleteClass } = require('../controllers/classes')

server.get('/', getClasses)

server.post('/createClass', createClass)

server.put('/editClass', modifyClass)

server.delete('/deleteClass', deleteClass)

module.exports = server