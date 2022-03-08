const express = require('express');
const Reports = require('../controllers/reportController');
const router = express.Router();

//fetch user => GET
router.get('/report', Reports.getReport);

//add user data => POST
router.post('/add_report', Reports.postAddReport);

//get one data => GET
router.get('/onereport/:id', Reports.getOneReport);

//update data => PUT
router.put('/update/:id', Reports.updateReport);

//delete data => DELETE
router.delete('/delete/:id', Reports.deleteReport);

module.exports = router;