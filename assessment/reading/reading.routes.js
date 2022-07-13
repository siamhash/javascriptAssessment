const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./reading.controller');

route.post('/', Controller.storeReading);

module.exports = route;
