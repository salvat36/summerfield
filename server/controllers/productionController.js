const Production = require('../models').Production;

exports.getAllProductions = async (req, res) => {
    Production.findAll()
    .then(prods => res.status(200).send({
        success: 'true',
        message: 'Productions retrieved successfully',
        prods,
    }));
}