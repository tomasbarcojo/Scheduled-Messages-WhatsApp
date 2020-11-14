const server = require('express').Router()
const { getUsers, createUser, modifyUser, deleteUser } = require('../controllers/user')

server.get('/', getClasses)

server.post('/createClass', createClass)

server.put('/editClass', modifyClass)

server.delete('/deleteClass', deleteClass)

module.exports = server