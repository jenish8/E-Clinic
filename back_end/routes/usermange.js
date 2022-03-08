const express = require('express');
const User = require('../controllers/userController');
const router = express.Router();

//fetch user => GET
router.get('/users', User.getUser);

//add user data => POST
router.post('/add-user', User.postAddUser);

//get one data => GET
router.get('/onedata/:id', User.getOneData);

//get one data => GET
router.get('/getpass/:uname', User.getPass);

router.post('/checkp', User.checkpass);

//update data => PUT
router.put('/update/:id', User.updateData);

//delete data => DELETE
router.delete('/delete/:id', User.deleteData);

//Temperory delete data => PUT
router.put('/tempdelete/:id', User.TempDeleteData);

//Regain data => PUT
router.put('/regain/:id', User.RegainData);

//update data => PUT
router.put('/updateuser/:uname', User.updateDataUser);

//get one data => GET
router.get('/oneuser/:uname', User.getOneUser);

router.get('/address/:uname', User.getAddress);

module.exports = router;