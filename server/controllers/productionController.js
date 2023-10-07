const { Production, StaffMember } = require('../models');

exports.getAllProductions = async (req, res) => {
    try {
    const prods = await Production.findAll();
    res.status(200).json({
        success: true,
        message: 'Productions retrieved successfully',
        prods,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
    }
};