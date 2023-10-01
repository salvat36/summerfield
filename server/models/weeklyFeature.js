'use strict';
const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
    const WeeklyFeature = sequelize.define('WeeklyFeature',{
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        contents:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false,
        },
        expiresAt:{
            type: DataTypes.DATE,
            allowNull:false,
        },
        status: {
            type: DataTypes.ENUM('active', 'archived'),
            allowNull: false,
            defaultValue: 'active', 
        },
        image:{
            type:DataTypes.Char,
            allowNull: true,
            //if we want to allow a feature to have an image
        },
    })
//any associations go here --> WeeklyFeature.associate = (models) =>{}
    return WeeklyFeature
}