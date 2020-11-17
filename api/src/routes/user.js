const server = require('express').Router()
const { getUsers, createUser, modifyUser, deleteUser } = require('../controllers/user')

server.get('/', getUsers)

server.post('/createUser', createUser)

server.put('/editUser', modifyUser)

server.delete('/deleteUser', deleteUser)

module.exports = server