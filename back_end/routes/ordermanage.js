const express = require('express');
const Order = require('../controllers/orderController');
const router = express.Router();

//fetch user => GET
router.get('/order', Order.getOrder);

//add user data => POST
router.post('/add_order', Order.postAddOrder);

//get one data => GET
router.get('/oneorder/:id', Order.getOneOrder);

//update data => PUT
router.put('/update/:id', Order.updateOrder);

//delete data => DELETE
router.delete('/delete/:id', Order.deleteOrder);

module.exports = router;