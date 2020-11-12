models 

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('classes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};

routes

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

indexjs

const { Router } = require('express');
// import all routers;
const classesRouter = require('./classes.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/classes', classesRouter);

module.exports = router;