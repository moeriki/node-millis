'use strict';

// modules

const utils = require('./utils');

// private variables

const MILLISECONDS_PER_SECOND = 1000;

// exports

const inSeconds = utils.multiply(1 / MILLISECONDS_PER_SECOND);

module.exports = inSeconds;
