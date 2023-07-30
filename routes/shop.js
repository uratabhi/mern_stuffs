const path = require('path');

const express = require('express');

const produtsController = require('../controllers/products');

const router = express.Router();

router.get('/', produtsController.getProducts);

module.exports = router;
