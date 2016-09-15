'use strict';

// modules

const days = require('./days');
const utils = require('./utils');

// private variables

const DAYS_PER_YEAR = 365;

// exports

const years = utils.multiply(days(DAYS_PER_YEAR));

module.exports = years;
