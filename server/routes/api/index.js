const router = require('express').Router();
const userRoute = require('./users');
const productionRoute = require('./productions');

router.use('/users', userRoute);
router.use('/productions', productionRoute);

module.exports = router;