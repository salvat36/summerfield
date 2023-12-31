const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');
const crewRoute = require('./crewmembers');
const featureRoute = require('./features');
const showtimeRoute = require('./showtimes');
const staffRoute = require('./staffmembers');

router.use('/users', userRoute);
router.use('/productions', productionRoute);
router.use('/crewmembers', crewRoute);
router.use('/features', featureRoute);
router.use('/showtimes', showtimeRoute);
router.use('/staffmembers', staffRoute);

module.exports = router;