const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const produtsController  = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', produtsController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', produtsController.postAddProducts);

module.exports = router;
