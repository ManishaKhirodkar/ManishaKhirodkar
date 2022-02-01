const Locations = require('../Models/locations.json');

exports.getLocations =(req, res) => {
    res.status(200).json(Locations);
};