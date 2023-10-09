const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');
const staffRoute = require('./staffmembers');
const featureRoute = require('./features');

router.use('/users', userRoute);
router.use('/productions', productionRoute);
router.use('/staffmembers', staffRoute);
router.use('/features', featureRoute);

module.exports = router;