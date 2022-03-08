const {Sequelize} = require('sequelize');
const host="localhost";
const user="root";
const password="";
const database="clinic";
const dialect="mysql";

//database collection
module.exports= new Sequelize(database,user,password,{
    host:host,
    dialect:dialect
})