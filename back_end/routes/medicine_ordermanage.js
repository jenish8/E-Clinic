const express = require('express');
const Med_Order = require('../controllers/medicine_order');
const router = express.Router();

//fetch user => GET
router.get('/medorderdetails', Med_Order.getMed_Order);

//add user data => POST
router.post('/add_medorder', Med_Order.postAddMed_Order);

//get one data => GET
router.get('/one_medorder/:id', Med_Order.getOneMed_Order);

//update data => PUT
router.put('/update/:id', Med_Order.updateMed_Order);

router.put('/updateAdd/:id', Med_Order.updateAddress);

router.put('/updateStatus/:id', Med_Order.updateStatus);

//delete data => DELETE
router.delete('/delete/:id', Med_Order.deleteMed_Order);

module.exports = router;