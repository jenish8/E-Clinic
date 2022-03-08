const express = require('express');
const Patient = require('../controllers/patientController');
const router = express.Router();

//fetch user => GET
router.get('/patient', Patient.getPatient);

//add user data => POST
router.post('/add_patient', Patient.postAddPatient);

//get one data => GET
router.get('/onepatient/:id', Patient.getOnePatient);

//update data => PUT
router.put('/update/:id', Patient.updatePatient);

//delete data => DELETE
router.delete('/delete/:id', Patient.deletePatient);

//Temperory delete data => PUT
router.put('/tempdelete/:id', Patient.TempDeletePatient);

//Regain data => PUT
router.put('/regain/:id', Patient.RegainPatient);

//Take Appoment
router.get('/show-old-data', Patient.getAllAppoiment);

module.exports = router;