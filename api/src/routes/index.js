const { Router } = require('express');
// import all routers;
const classesRouter = require('./classes.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/classes', classesRouter);

module.exports = router;