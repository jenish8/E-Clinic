const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Order';
//Order table
const Order=db.define(tablename, {
    PatientId:{
        type:Sequelize.STRING
    },
    OrderDate:{
        type:Sequelize.STRING
    },
    OrderStatus:{
        type:Sequelize.STRING
    },
    PaymentMode:{
        type:Sequelize.STRING
    },
    Prescription:{
        type:Sequelize.STRING
    },
    PaymentTransId:{
        type:Sequelize.STRING
    },

});

//table create
Order.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Order;