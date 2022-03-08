const Sequelize = require('sequelize');
const db = require('../config/database')
const tablename = 'cart';

const cart = db.define(tablename, {
    PatientId:{
        type:Sequelize.STRING
    },

    MedicineId:{
        type:Sequelize.STRING
    },

    Qty:{
        type:Sequelize.STRING,
        defaultValue: "1"
    },
    status:{
        type:Sequelize.STRING,
        defaultValue: "active"
    },
    Price:{
        type:Sequelize.STRING,
    }

});

cart.sync({focus:true}).then(() => {
    console.log(`Table Create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = cart;