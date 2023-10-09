const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');
const crewRoute = require('./crewmembers');

router.use('/users', userRoute);
router.use('/productions', productionRoute);
router.use('/crewmembers', crewRoute);

module.exports = router;