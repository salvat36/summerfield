import sequelize from "index.js"

const { Sequelize, DataTypes } = require('sequelize');

const Production = sequelize.define('Production', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    description: {
        type: DataTypes.STRING,
    },
    startDate: {
        type: DataTypes.DATE,
    },
    endDate: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    ticketLink: {
        type: DataTypes.STRING
    },
    flyer: {
        type: DataTypes.STRING
    }
});
