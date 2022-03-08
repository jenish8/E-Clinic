const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename = 'Clinic';

//CLinic table
const Clinic = db.define(tablename, {
    ClinicName: {
        type: Sequelize.STRING
    },
    Address: {
        type: Sequelize.STRING
    },
    ContactNo: {
        type: Sequelize.STRING
    },
    AboutUs: {
        type: Sequelize.STRING
    },
    NewPatientFees: {
        type: Sequelize.STRING
    },
    OldPatientFees: {
        type: Sequelize.STRING
    },
    VideoConsultationFees: {
        type: Sequelize.STRING
    },
    drname: {
        type: Sequelize.STRING
    },
    IsDeleted: {
        type: Sequelize.STRING
    },

});

//table create
Clinic.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Clinic;