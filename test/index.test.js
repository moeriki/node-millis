'use strict';

const millis = require('../index');

// tests

it('should have the same logic singular as plural', () => {
  expect(millis.seconds).toBe(millis.second);
  expect(millis.minutes).toBe(millis.minute);
  expect(millis.hours).toBe(millis.hour);
  expect(millis.days).toBe(millis.day);
  expect(millis.weeks).toBe(millis.week);
  expect(millis.months).toBe(millis.month);
  expect(millis.years).toBe(millis.year);
});

it('should parse seconds', () => {
  expect(millis.seconds(5)).toBe(5000);
  expect(15 * millis.seconds()).toBe(15000);
});

it('should parse minutes', () => {
  expect(millis.minutes(5)).toBe(5000 * 60);
  expect(15 * millis.minutes()).toBe(15000 * 60);
});

it('should parse hours', () => {
  expect(millis.hours(5)).toBe(5000 * 60 * 60);
  expect(15 * millis.hours()).toBe(15000 * 60 * 60);
});

it('should parse days', () => {
  expect(millis.days(5)).toBe(5000 * 60 * 60 * 24);
  expect(15 * millis.days()).toBe(15000 * 60 * 60 * 24);
});

it('should parse weeks', () => {
  expect(millis.weeks(5)).toBe(5000 * 60 * 60 * 24 * 7);
  expect(15 * millis.weeks()).toBe(15000 * 60 * 60 * 24 * 7);
});

it('should parse months', () => {
  expect(millis.months(5)).toBe(5000 * 60 * 60 * 24 * 30);
  expect(15 * millis.months()).toBe(15000 * 60 * 60 * 24 * 30);
});

it('should parse years', () => {
  expect(millis.years(5)).toBe(5000 * 60 * 60 * 24 * 365);
  expect(15 * millis.years()).toBe(15000 * 60 * 60 * 24 * 365);
});
