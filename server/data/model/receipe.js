const { DataTypes } = require('sequelize')
const sequelize = require('./db');
const { type } = require('../mutation/mutation');

const food_receipe = sequelize.define('receipe',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    receipeName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ingredients:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    instruction:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})

module.exports= food_receipe;