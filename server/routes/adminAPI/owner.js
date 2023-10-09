const express = require('express');
const router = express.Router();
const { passport } = require('../../middlewares/auth');
const { checkAccessLevel } = require('../../middlewares/accessControl');
const portalsController = require('../../controllers/portalController')


// Protected route for owners
router.get('/owner', passport.authenticate('jwt', { session: false }), checkAccessLevel('owner'), (req, res) => {
  // Handle owner-only functionality here
    res.json({ message: 'Owner portal accessed' });
});

module.exports = router;