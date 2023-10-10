const express = require('express');
const router = express.Router();
const productionController = require('../../controllers/productionController');

router.get('/', productionController.getAllProductions);

module.exports = router;

