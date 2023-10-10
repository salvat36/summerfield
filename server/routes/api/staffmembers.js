const express = require('express');
const router = express.Router();
const staffController = require('../../controllers/staffController');

// Define your routes here
router.get('/', staffController.getAllStaff);

module.exports = router;

