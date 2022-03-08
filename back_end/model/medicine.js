const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Medicine';
//Medicine table
const Medicine=db.define(tablename, {
    MedicineName:{
        type:Sequelize.STRING
    },
    BrandId:{
        type:Sequelize.STRING
    },
    Price:{
        type:Sequelize.STRING
    },
    Photo:{
        type:Sequelize.STRING
    },
    Description:{
        type:Sequelize.STRING
    },
    AvailableQty:{
        type:Sequelize.STRING
    },
    IsDeleted:{
        type:Sequelize.STRING
    },

});

//table create
Medicine.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Medicine;