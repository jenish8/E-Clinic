const stockCOntroller = require('../controllers/stockController');

const express = require('express');

const router = express.Router();

router.get('/ms/:id', stockCOntroller.getStockCount);

module.exports = router;