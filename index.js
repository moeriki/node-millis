'use strict';

// modules

const seconds = require('./seconds');
const minutes = require('./minutes');
const hours = require('./hours');
const days = require('./days');
const weeks = require('./weeks');
const months = require('./months');
const years = require('./years');

const inSeconds = require('./inSeconds');

// private variables

module.exports = {

  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years,

  second: seconds,
  minute: minutes,
  hour: hours,
  day: days,
  week: weeks,
  month: months,
  year: years,

  inSeconds,

};
