const { StaffMember, Production } = require('../models');

exports.getAllStaff = async (req, res) => {
    try {
    const staff = await StaffMember.findAll({
        include: [{
            model: Production
        }]
    });
    res.status(200).json({
        success: true,
        message: 'Staff retrieved successfully',
        staff,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
    }
};