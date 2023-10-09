const { Showtime } = require('../models');

exports.getAllShowtimes = async (req, res) => {
    try {
        const showtimes = await Showtime.findAll();
        res.status(200).json({
            success: true,
            message: 'Show times retrieved successfully',
            showtimes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
};
