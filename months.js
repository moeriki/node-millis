'use strict';

// modules

const days = require('./days');
const utils = require('./utils');

// private variables

const DAYS_PER_MONTH = 30;

// exports

const months = utils.multiply(days(DAYS_PER_MONTH));

module.exports = months;
