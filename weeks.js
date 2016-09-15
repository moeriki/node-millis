'use strict';

// modules

const days = require('./days');
const utils = require('./utils');

// private variables

const DAYS_PER_WEEK = 7;

// exports

const weeks = utils.multiply(days(DAYS_PER_WEEK));

module.exports = weeks;
