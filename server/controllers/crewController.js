const { CrewMember, Production } = require('../models');

exports.getAllCrew = async (req, res) => {
    try {
    const crew = await CrewMember.findAll({
    });
    res.status(200).json({
        success: true,
        message: 'Crew Member retrieved successfully',
        crew,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
    }
};