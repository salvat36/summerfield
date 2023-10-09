const express = require('express');
const router = express.Router();
const { passport } = require('../../middlewares/auth');
const { checkAccessLevel } = require('../../middlewares/accessControl');
const portalsController = require('../../controllers/portalController')

// Protected route for admin-specific functionality
router.get('/', passport.authenticate('jwt', { session: false }), checkAccessLevel('admin'), (req, res) => {
  // Handle admin-only functionality here
    res.json({ message: 'Admin portal accessed' });
});

// Add more admin-specific routes here

module.exports = router;
