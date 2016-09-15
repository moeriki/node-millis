'use strict';

// modules

const hours = require('./hours');
const utils = require('./utils');

// private variables

const HOURS_PER_DAY = 24;

// exports

const days = utils.multiply(hours(HOURS_PER_DAY));

module.exports = days;
