const express = require('express');
const Brand = require('../controllers/brandController');
const router = express.Router();
const passport = require('passport');

// //fetch user => GET
// router.get('/brand',passport.authenticate('jwt', {session:false}) ,Brand.getBrand);


router.get('/brand',Brand.getBrand);

//add user data => POST
router.post('/add_brand', Brand.postAddBrand);

//get one data => GET
router.get('/onebrand/:id', Brand.getOneBrand);

//update data => PUT
router.put('/update/:id', Brand.updateBrand);

//delete data => DELETE
router.delete('/delete/:id', Brand.deleteBrand);

//Temperory delete data => PUT
router.put('/tempdelete/:id', Brand.TempDeleteBrand);

//Regain data => PUT
router.put('/regain/:id', Brand.RegainBrand);

//Get Brand Id => GET
router.get('/brand-id/:brandName', Brand.getBrandId);

module.exports = router;