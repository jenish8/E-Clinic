const express = require('express');
const fpasswrod = require('../controllers/forgotpasswordController');
const router = express.Router();

//upload file
router.post('/username', fpasswrod.postUsernameChek);

router.post('/updatepass', fpasswrod.postUpdatePassword);

router.get('/getpass/:id', fpasswrod.getOneData);

module.exports = router;