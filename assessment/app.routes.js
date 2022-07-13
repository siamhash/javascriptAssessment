const express = require('express');
const { readingRoute } = require('./reading');

const route = express.Router({ mergeParams: true });
route.use('/Reading', readingRoute);

module.exports = route;
