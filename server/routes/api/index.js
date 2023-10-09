const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');
const staffRoute = require('./staffmembers');

router.use('/users', userRoute);
router.use('/productions', productionRoute);
router.use('/staffmembers', staffRoute);

module.exports = router;