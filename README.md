# Millis

Millis is a set of functions that converts different measures (minutes, hours, etc..) to milliseconds.

[![Build Status](https://travis-ci.org/Moeriki/millis.svg?branch=master)](https://travis-ci.org/Moeriki/millis) [![Coverage Status](https://coveralls.io/repos/github/Moeriki/millis/badge.svg?branch=master)](https://coveralls.io/github/Moeriki/millis?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/moeriki/millis/badge.svg)](https://snyk.io/test/github/moeriki/millis) [![dependencies Status](https://david-dm.org/moeriki/millis/status.svg)](https://david-dm.org/moeriki/millis)

---

Because code is read by humans we don't like this.

```javascript
const CACHE_TIMEOUT = 30 * 24 * 60 * 60 * 1000;

const COOKIE_EXPIRE = Date.now() + 1209600000;
```

But we do like this.

```javascript
import { days } from 'millis'

const CACHE_TIMEOUT = days(30)

const COOKIE_EXPIRE = Date.now() + 14 * days();
```

## Install

```sh
npm install --save millis
```

## Import

```javascript
const seconds = require('millis/seconds');
const minutes = require('millis/minutes');
const hours = require('millis/hours');
const days = require('millis/days');
const weeks = require('millis/weeks');
const months = require('millis/months');
const years = require('millis/years');
```

**ES Modules**

```javascript
import { seconds, minutes, hours, days, weeks, months, years } from 'millis';
```

## Usage

```javascript
const THIRTY_SECONDS = seconds(30);
const SIX_HOURS = 6 * hours();
const TWO_DAYS_AND_TWO_HOURS = 2 * days() + 2 * hours();
```

All methods are available in singular and plural.

```javascript
const year = require('millis/year');
const ONE_YEAR = year();
```

### In seconds

Because often timestamps are in unix format. You might need your duration in seconds instead of milliseconds.

```javascript
const hours = require('millis/hours');
const inSeconds = require('millis/inSeconds');
const ONE_YEAR = 2 * hours() * inSeconds();
```

### Extending Number prototype

If you don't understand the implication of extending a native prototype \[[1](http://perfectionkills.com/extending-native-builtins/)\] \[[2](http://stackoverflow.com/questions/14034180/why-is-extending-native-objects-a-bad-practice)\], don't use this.

```javascript
require('millis/register');

const TWO_DAYS = (2).days();
const SIX_HOURS_IN_SECONDS = (6).hours().inSeconds();
```
