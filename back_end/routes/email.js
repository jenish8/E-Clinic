const express = require('express');
const Email = require('../controllers/email');
const router = express.Router();

//upload file
router.post('/sendemail', Email.postSendEmail);



module.exports = router;