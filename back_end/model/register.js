const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='rEgister';
//register table
const rEgister=db.define(tablename, {
    fname:{
        type:Sequelize.STRING
    },
    lname:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    },
    contact_no:{
        type:Sequelize.STRING
    },
    email_id:{
        type:Sequelize.STRING
    },
    uname:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    utype:{
        type:Sequelize.STRING
    },
    IsDeleted:{
        type:Sequelize.STRING
    },

});

//table create
rEgister.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = rEgister;