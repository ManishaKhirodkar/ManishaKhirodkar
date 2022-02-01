const Restaurants = require('../Models/restaurants.json');

exports.getRestaurants = (req, res) => {
    res.status(200).json(Restaurants);
};

exports.getRestaurantsByCity = (req, res) => {
    const cityInput = req.params.city;
    const filteredRestaurants = Restaurants.filter(item => item.city == cityInput);
    res.status(200).json(filteredRestaurants);
};