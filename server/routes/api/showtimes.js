const express = require('express');
const router = express.Router();
const showtimeController = require('../../controllers/showtimeController');

// Define your routes here
router.get('/', showtimeController.getAllShowtimes);

module.exports = router;
