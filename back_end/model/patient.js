const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Patient';
//register table
const Patient=db.define(tablename, {
    fname:{
        type:Sequelize.STRING
    },
    lname:{
        type:Sequelize.STRING
    },
    gender:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    },
    contact_no:{
        type:Sequelize.STRING
    },
    dob:{
        type:Sequelize.STRING
    },
    email_id:{
        type:Sequelize.STRING
    },
    login_id:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    photo:{
        type:Sequelize.STRING
    },
    IsDeleted:{
        type:Sequelize.STRING
    },

});

//table create
Patient.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Patient;