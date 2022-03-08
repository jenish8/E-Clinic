const express = require('express');
const Order_details = require('../controllers/order_detailcontroller');
const router = express.Router();

//fetch user => GET
router.get('/orderdetails', Order_details.getDetails);

//add user data => POST
router.post('/add_details', Order_details.postAddDetails);

//get one data => GET
router.get('/onedetail/:id', Order_details.getOneDetails);

//update data => PUT
router.put('/update/:id', Order_details.updateDetails);

//delete data => DELETE
router.delete('/delete/:id', Order_details.deleteDetails);

module.exports = router;