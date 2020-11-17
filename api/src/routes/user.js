const server = require('express').Router()
const { getUsers, createUser, modifyUser, deleteUser, loginUser } = require('../controllers/user')

server.get('/', getUsers)

server.post('/createUser', createUser)

server.post('/login', loginUser)

server.put('/editUser', modifyUser)

server.delete('/deleteUser', deleteUser)

module.exports = server