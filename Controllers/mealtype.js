const Mealtype = require('../Models/mealtype.json');

exports.getMealtype = (req, res) => {
    res.status(200).json(Mealtype);

};