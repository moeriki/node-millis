'use strict';

// modules

const seconds = require('../seconds');
const second = require('../second');
const minutes = require('../minutes');
const minute = require('../minute');
const hours = require('../hours');
const hour = require('../hour');
const days = require('../days');
const day = require('../day');
const weeks = require('../weeks');
const week = require('../week');
const months = require('../months');
const month = require('../month');
const years = require('../years');
const year = require('../year');

const inSeconds = require('../inSeconds');

const millis = require('../index');

// tests

it('should export plural', () => {
  expect(seconds).toBe(millis.seconds);
  expect(minutes).toBe(millis.minutes);
  expect(hours).toBe(millis.hours);
  expect(days).toBe(millis.days);
  expect(weeks).toBe(millis.weeks);
  expect(months).toBe(millis.months);
  expect(years).toBe(millis.years);
});

it('should export singular', () => {
  expect(second).toBe(millis.second);
  expect(minute).toBe(millis.minute);
  expect(hour).toBe(millis.hour);
  expect(day).toBe(millis.day);
  expect(week).toBe(millis.week);
  expect(month).toBe(millis.month);
  expect(year).toBe(millis.year);
});

it('should have the same logic singular as plural', () => {
  expect(seconds).toBe(second);
  expect(minutes).toBe(minute);
  expect(hours).toBe(hour);
  expect(days).toBe(day);
  expect(weeks).toBe(week);
  expect(months).toBe(month);
  expect(years).toBe(year);
});

it('should export extras', () => {
  expect(millis.inSeconds).toBe(inSeconds);
});
