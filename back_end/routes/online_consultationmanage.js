const express = require('express');
const Online_consulatation = require('../controllers/online_consulatationController');
const router = express.Router();

//fetch user => GET
router.get('/consultation', Online_consulatation.getData);

//add user data => POST
router.post('/add_data', Online_consulatation.postAddData);

//get one data => GET
router.get('/onedata/:id', Online_consulatation.getOneData);

//update data => PUT
router.put('/update/:id', Online_consulatation.updateData);

//delete data => DELETE
router.delete('/delete/:id', Online_consulatation.deleteData);

module.exports = router;