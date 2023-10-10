const { Feature, StaffMember } = require('../models');

exports.getAllFeatures = async (req, res) => {
    try {
    const features = await Feature.findAll();
    res.status(200).json({
        success: true,
        message: 'Features retrieved successfully',
        features,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
    }
};