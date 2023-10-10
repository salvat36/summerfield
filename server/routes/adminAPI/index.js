const router = require('express').Router();
const adminRoute = require('./admin')
const ownerRoute = require('./owner')
const userController = require('../../controllers/userController');
const { passport } = require('../../middlewares/auth');

router.post('/login', userController.login);
router.use('/admin', adminRoute);
router.use('/owner', ownerRoute);

module.exports = router;