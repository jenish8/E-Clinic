const express = require('express');
const Clinic = require('../controllers/clinicController');
const router = express.Router();

//fetch user => GET
router.get('/clinic', Clinic.getClinic);

//add user data => POST
router.post('/add_clinic', Clinic.postAddClinic);

//get one data => GET
router.get('/oneclinic/:id', Clinic.getOneClinic);

//update data => PUT
router.put('/update/:id', Clinic.updateClinic);

//delete data => DELETE
router.delete('/delete/:id', Clinic.deleteClinic);

//Temperory delete data => PUT
router.put('/tempdelete/:id', Clinic.TempDeleteClinic);

//Regain data => PUT
router.put('/regain/:id', Clinic.RegainClinic);

module.exports = router;