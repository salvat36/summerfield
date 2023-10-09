const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');
const crewRoute = require('./crewmembers');
const featureRoute = require('./features');

router.use('/users', userRoute);
router.use('/productions', productionRoute);
router.use('/crewmembers', crewRoute);
router.use('/features', featureRoute);

module.exports = router;