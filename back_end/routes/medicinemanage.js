const express = require('express');
const Medicine = require('../controllers/medicineController');
const router = express.Router();

//fetch user => GET
router.get('/medicine', Medicine.getMedicine);

//add user data => POST
router.post('/add_medicine', Medicine.postAddMedicine);

//get one data => GET
router.get('/onemedicine/:id', Medicine.getOneMedicine);

//update data => PUT
router.put('/update/:id', Medicine.updateMedicine);

//delete data => DELETE
router.delete('/delete/:id', Medicine.deleteMedicine);

//Temperory delete data => PUT
router.put('/tempdelete/:id', Medicine.TempDeleteMedicine);

//Regain data => PUT
router.put('/regain/:id', Medicine.RegainMedicine);

//get one data => GET
router.get('/onemedicinename/:MedicineName', Medicine.getOneMedicineName);
router.get('/submedicinename/:MedicineName', Medicine.getSubMedicine);
router.get('/med_qty/:MedicineId', Medicine.getMedQty);

module.exports = router;