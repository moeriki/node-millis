/* eslint no-extend-native:0 */

'use strict';

const reset = require('../register');
const millis = require('../index');

// tests

describe('register()', () => {

  let register;

  beforeEach(() => {
    register = reset();
  });

  it('should throw if already extended', () => {
    // setup
    register();
    // test
    expect(() => register()).toThrow();
  });

  it('should extend prototype', () => {
    // setup
    register();
    // test & verify
    expect((1).day()).toBe(Number(millis.day()));
    expect((1).hour()).toBe(Number(millis.hour()));
    expect((1).day()).toBe(Number(millis.day()));
    expect((1).week()).toBe(Number(millis.week()));
    expect((1).month()).toBe(Number(millis.month()));
    expect((1).year()).toBe(Number(millis.year()));
    expect((2).days()).toBe(2 * millis.days());
    expect((2).hours()).toBe(2 * millis.hours());
    expect((2).days()).toBe(2 * millis.days());
    expect((2).weeks()).toBe(2 * millis.weeks());
    expect((2).months()).toBe(2 * millis.months());
    expect((2).years()).toBe(2 * millis.years());
  });

  it('should not remove potentially existing properties when resetting', () => {
    // setup
    Number.prototype.days = 'NATIVELY_SET';
    // test
    reset();
    // verify
    expect(Number.prototype.days).toBe('NATIVELY_SET');
    // clean up
    delete Number.prototype.days;
  });

  it('should throw if property exists', () => {
    // setup
    Number.prototype.days = 'ALREADY_SET';
    // test & verify
    expect(() => register()).toThrow();
    // clean up
    delete Number.prototype.days;
  });

});
