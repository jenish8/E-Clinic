const express = require('express');
const File = require('../controllers/fileController');
const router = express.Router();

//upload file
router.post('/upload', File.postPath);


module.exports = router;