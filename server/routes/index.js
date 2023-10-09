const router = require('express').Router();
const apiRoutes = require('./api');
const adminRoutes = require('./adminAPI');


router.use('/api/v1', apiRoutes);

//all protected routes go in that folder/route files
router.use('/portal/v1', adminRoutes);

module.exports = router;