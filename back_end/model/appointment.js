const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Appointment';
//Appointment table
const Appointment=db.define(tablename, {
    PatientId:{
        type:Sequelize.STRING
    },
    AppointmentDate:{
        type:Sequelize.STRING
    },
    AppointmentTime:{
        type:Sequelize.STRING
    },
    AppointmentTakenDate:{
        type:Sequelize.STRING
    },
    Status:{
        type:Sequelize.STRING
    },
    UserIdGiven:{
        type:Sequelize.STRING
    },
    Prescription:{
        type:Sequelize.STRING
    },
    Fees:{
        type:Sequelize.STRING
    },

});

//table create
Appointment.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Appointment;