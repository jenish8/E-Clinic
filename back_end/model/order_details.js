const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Order_details';
//register table
const Order_details=db.define(tablename, {
    OrderId:{
        type:Sequelize.STRING
    },
    MedicineId:{
        type:Sequelize.STRING
    },
    Qty:{
        type:Sequelize.STRING
    },
    Price:{
        type:Sequelize.STRING
    },
});

//table create
Order_details.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Order_details;