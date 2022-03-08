const express = require('express');
const Time = require('../controllers/timecontroller');
const router = express.Router();

//fetch user => GET
router.get('/time', Time.getTime);

//add user data => POST
router.post('/add_time', Time.postAddTime);

//get one data => GET
router.get('/onetime/:id', Time.getOneTime);

//update data => PUT
router.put('/update/:id', Time.updateTime);

//delete data => DELETE
router.delete('/delete/:id', Time.deleteTime);

//Temperory delete data => PUT
router.put('/tempdelete/:id', Time.TempDeleteTime);

//Regain data => PUT
router.put('/regain/:id', Time.RegainTime);

module.exports = router;
