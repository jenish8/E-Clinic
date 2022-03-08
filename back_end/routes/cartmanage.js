const express = require('express');
const Cart = require('../controllers/cartController');
const router = express.Router();

//fetch user => GET
router.get('/cart', Cart.getCart);

//add user data => POST
router.post('/add_cart', Cart.postAddCart);

//get one data => GET
router.get('/onecart/:id', Cart.getOneCart);

router.get('/checkcart/:pid/:mid', Cart.checkCart);

//update data => PUT
router.put('/update/:id', Cart.updateCart);

router.put('/updatePrice/:id', Cart.updateCartPrice);

//delete data => DELETE
router.delete('/delete/:id', Cart.deleteCart);

router.get('/total/:id', Cart.getPurches);

router.get('/order/:id', Cart.getOrder);

router.post('/us/:id', Cart.updateCardS);

module.exports = router;