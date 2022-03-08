const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Medicine_Order';
//Medicine Order table
const Med_Order=db.define(tablename, {
    PatientId:{
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
    Total:{
        type:Sequelize.STRING
    },
    Delivery_Address:{
        type:Sequelize.STRING
    },
    OrderStatus:{
        type:Sequelize.STRING
    },
    PaymentMode:{
        type:Sequelize.STRING
    },

});

//table create
Med_Order.sync({focus:true}).then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Med_Order;