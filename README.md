# phonebookjs

## Overview

phonebookjs is a simple phone number location & carrier lookup API.

This is the first release version of phonebookjs. This release only supports 10-digit US phone numbers. 

## Installation

``` javascript
// To install phonebookjs:
git clone www.github.com/statsdatacode/phonebookjs
```

## Usage

``` javascript
const PhoneNumber = require('./phonebookjs');

let number = new PhoneNumber('202-201-9999');

console.log(number);
// expected output 
// PhoneNumber {
//  number: '2022019999',
//  areacode: '202',
//  prefix: '201',
//  last_four: '9999',
//  location:
//   { city: 'Washington',
//     state: { abbrv: 'DC', name: 'District of Columbia' } },
//  carrier: '9211 VERIZON WASHINGTON, DC INC.' }

console.log(number.locate());
// expected output 'Washington, DC'
```

## Getting help

If you encounter an issue, please file a minimal reproducible example
on [github](https://github.com/statsdatacode/phonebookjs/issues). 