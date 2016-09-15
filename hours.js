'use strict';

// modules

const minutes = require('./minutes');
const utils = require('./utils');

// private variables

const MINUTES_PER_HOUR = 60;

// exports

const hours = utils.multiply(minutes(MINUTES_PER_HOUR));

module.exports = hours;
