const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Reports';
//register table
const Reports=db.define(tablename, {
    PatientId:{
        type:Sequelize.STRING
    },
    Report:{
        type:Sequelize.STRING
    },
    Remarks:{
        type:Sequelize.STRING
    },
    
});

//table create
Reports.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Reports;