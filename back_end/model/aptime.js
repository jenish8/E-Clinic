const Sequelize = require('sequelize');
const db = require('../config/database')
const tablename = 'aptime';

const Aptime = db.define(tablename, {
    timeSlot:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.STRING
    }


});

Aptime.sync().then(() => {
    console.log(`Table Create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = Aptime;