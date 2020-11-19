const server = require('express').Router()
const { getUsers, createUser, modifyUser, deleteUser, loginUser, getOneUser } = require('../controllers/user')

server.get('/', getUsers)

server.get('/:id', getOneUser)

server.post('/createUser', createUser)

server.post('/login', loginUser)

server.put('/editUser/:id', modifyUser)

server.delete('/deleteUser/:id', deleteUser)

module.exports = server