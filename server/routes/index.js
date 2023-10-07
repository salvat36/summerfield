const router = require('express').Router();
const apiRoutes = require('./api');

//route protection will go here or in api/index depending on package

router.use('/api/v1', apiRoutes);

module.exports = router;