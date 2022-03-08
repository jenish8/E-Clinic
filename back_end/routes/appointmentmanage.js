const express = require('express');
const Appointment = require('../controllers/appointmentController');
const router = express.Router();

//fetch user => GET
router.get('/appointment', Appointment.getAppointment);

router.get('/appotoday/:date', Appointment.getAppoDate);

router.get('/appohold/:date', Appointment.getUserOnhold);

router.get('/appoarrive/:date', Appointment.getUserArrive);

router.get('/appocomplete/:date', Appointment.getUserCompleted);

router.get('/appocount/:date', Appointment.CountAppointment);

//add user data => POST
router.post('/add_appointment', Appointment.postAddAppointment);

//get one data => GET
router.get('/oneappointment/:id', Appointment.getOneAppointment);

router.get('/getuserapo/:id', Appointment.getUserApo);

//update data => PUT
router.put('/update/:id', Appointment.updateAppointment);
router.put('/cancel/:id', Appointment.cancelAppointment);
router.put('/arrive/:id', Appointment.arriveAppointment);
router.put('/complete/:id', Appointment.completeAppointment);

//delete data => DELETE
router.delete('/delete/:id', Appointment.deleteAppointment);

//showe user appoiment
router.get('/count', Appointment.getCount);

router.get('/adminc', Appointment.getAdmin);

module.exports = router;