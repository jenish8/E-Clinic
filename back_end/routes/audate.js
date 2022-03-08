const express = require('express');
const duc = require('../controllers/dateUserController');
const router = express.Router();

//fetch user => GET
router.get('/showdate', duc.getAllDate);

//date enter
router.post('/addtd/:id', duc.postUserSelectDateTime);


module.exports = router;