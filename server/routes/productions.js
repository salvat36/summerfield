const express = require('express');
const router = express.Router();
const productionController = require('../controllers/productionController');

// Define your routes here
router.get('/', productionController.getAllProductions);

module.exports = router;

