'use strict';

const deregister = require('../register');
const millis = require('../index');

// tests

describe('register()', () => {

  it('should extend prototype', () => {
    expect((1).day()).toBe(millis.day());
    expect((1).hour()).toBe(millis.hour());
    expect((1).day()).toBe(millis.day());
    expect((1).week()).toBe(millis.week());
    expect((1).month()).toBe(millis.month());
    expect((1).year()).toBe(millis.year());
    expect((2).days()).toBe(2 * millis.days());
    expect((2).hours()).toBe(2 * millis.hours());
    expect((2).days()).toBe(2 * millis.days());
    expect((2).weeks()).toBe(2 * millis.weeks());
    expect((2).months()).toBe(2 * millis.months());
    expect((2).years()).toBe(2 * millis.years());
  });

  afterAll(deregister);

});
