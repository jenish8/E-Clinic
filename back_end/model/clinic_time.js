const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename = 'Clinic_time';

const Clinic_time = db.define(tablename,{
    ClinicId:{
        type:Sequelize.STRING
    },

    Days:{
        type:Sequelize.STRING
    },

    From:{
        type:Sequelize.STRING
    },

    To:{
        type:Sequelize.STRING
    },

    IsDeleted:{
        type:Sequelize.STRING
    },
});

Clinic_time.sync().then(() =>{
    console.log(`Table created ${tablename}`);
}).catch((error) => {
    console.log(error);
});

module.exports = Clinic_time;