const server = require('express').Router()
const { getUsers, createUser, modifyUser, deleteUser } = require('../controllers/user')

server.get('/', getUsers)

server.post('/createClass', createUser)

server.put('/editClass', modifyUser)

server.delete('/deleteClass', deleteUser)

module.exports = server