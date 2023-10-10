const express = require('express');
const router = express.Router();
const crewController = require('../../controllers/crewController');

// Define your routes here
router.get('/', crewController.getAllCrew);

module.exports = router;

