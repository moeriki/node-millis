'use strict';

// modules

const seconds = require('./seconds');
const utils = require('./utils');

// private variables

const SECONDS_PER_MINUTE = 60;

// exports

const minutes = utils.multiply(seconds(SECONDS_PER_MINUTE));

module.exports = minutes;
