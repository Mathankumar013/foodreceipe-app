const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

sequelize.authenticate().then(()=>{
    console.log("connected successfully")
}).catch(()=>{
    console.log("failed to connected")
})
module.exports = sequelize;