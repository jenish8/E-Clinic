const express = require('express');
const File = require('../controllers/liveController');
const router = express.Router();

router.post('/time', File.postTime);

router.get('/getwtime', File.getWatingTime);

module.exports = router;