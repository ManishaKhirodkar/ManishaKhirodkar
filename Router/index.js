const express = require('express');

const rout = express.Router();

const locationsController = require('../Controllers/locations');

const restaurantController = require('../Controllers/restaurants');

const mealtypeController = require('../Controllers/mealtype');

rout.get('/locations', locationsController.getLocations);
rout.get('/restaurants/:city', restaurantController.getRestaurantsByCity);
rout.get('/mealtype', mealtypeController.getMealtype);

module.exports = rout;