const Sequelize = require('sequelize');
const db = require('../config/database');
const tablename='Brand';
//Brand table
const Brand=db.define(tablename, {
    BrandName:{
        type:Sequelize.STRING
    },
    IsDeleted:{
        type:Sequelize.STRING
    },

});

//table create
Brand.sync().then(() => {
    console.log(`Table create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Brand;