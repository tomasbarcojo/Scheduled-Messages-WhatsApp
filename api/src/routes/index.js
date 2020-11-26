const { Router } = require('express');
// import all routers;
const classesRouter = require('./classes');
const classesUser = require('./user')
const classesMP = require('./mercadopago')
const startClass = require('./startClass')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/classes', classesRouter);
router.use('/user', classesUser);
router.use('/mp', classesMP);
router.use('/startclass', startClass);

module.exports = router;