const Sequelize = require('sequelize');
const db = require('../config/database')
const tablename = 'live';

const live = db.define(tablename, {
    wtime: {
        type: Sequelize.STRING
    }

});

live.sync().then(() => {
    console.log(`Table Create ${tablename}`)
}).catch((error) => {
    console.log('error');
});

module.exports = live;