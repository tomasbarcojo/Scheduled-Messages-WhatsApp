const server = require('express').Router();
const { Classes } = require('../db.js');

server.get('/', (req, res, next) => {
	Classes.findAll()
		.then(classes => {
			res.send(classes);
		})
		.catch(next);
});

module.exports = server;
