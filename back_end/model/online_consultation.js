const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Online_consulatation';
//Online_consulatation table
const Online_consulatation=db.define(tablename, {
    PatientId:{
        type:Sequelize.STRING
    },
    ConsultationDate:{
        type:Sequelize.STRING
    },
    Status:{
        type:Sequelize.STRING
    },
    TimeGiven:{
        type:Sequelize.STRING
    },
    Prescription:{
        type:Sequelize.STRING
    },
    PaymentTransId:{
        type:Sequelize.STRING
    },
    Fees:{
        type:Sequelize.STRING
    },

});

//table create
Online_consulatation.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Online_consulatation;