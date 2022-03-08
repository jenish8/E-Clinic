const Sequelize = require('sequelize');
const db = require('../config/database')
const tablename = 'apdate';

const DateUser = db.define(tablename, {
    user_select_date:{
        type:Sequelize.STRING
    },
    t_id:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.STRING
    }


});

DateUser.sync().then(() => {
    console.log(`Table Create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = DateUser;