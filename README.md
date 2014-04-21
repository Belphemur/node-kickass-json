node-kickass-json [![NPM version](https://badge.fury.io/js/node-kickass-json.png)](http://badge.fury.io/js/node-kickass-json) [![Build Status](https://travis-ci.org/Belphemur/node-kickass-json.png?branch=master)](https://travis-ci.org/Belphemur/node-kickass-json)
============

[![NPM](https://nodei.co/npm/node-kickass-json.png?downloads=true&stars=true)](https://nodei.co/npm/node-kickass-json/)

> Query for torrents at Kickass.to with Node.js.

## Installation
Add `node-kickass-json` to your existing Node.js project.
```bash
npm install node-kickass-json --save
```

## Usage

See [examples](https://github.com/Belphemur/node-kickass-json/tree/master/examples) for more usage details.

Built as a [Fluent Interface](http://en.wikipedia.org/wiki/Fluent_interface).
Also known as [method chaining](http://en.wikipedia.org/wiki/Method_chaining#jQuery), 
as used in [jQuery](http://jquery.com/).
Fork of [node-kickass](https://github.com/Glavin001/node-kickass) by @Glavin001

```javascript
var Kickass = require('node-kickass-json');

var k = new Kickass()
.setQuery('Almost Human')   // Set search Query parameter 
.run(function(errors, data) {
  /*
  this  {context} => Current Context is set to be `k`.
  errors  {array} => An array of errors that occured.
  data    {array} => An array of items/articles that were read.
  */
  if (! errors.length > 0) {
    // No errors occured.
    console.log(data.length, "results");
    console.log(
      errors,     // Array of errors, will be empty array given there are no errors.
      data,       // Array of items/articles read from this `run`.
      this.items  // Array of all items/articles read that have been associated to `k`, which is the current context `this`.
      );
  } else {
    // One or more errors occured.
    console.log(errors, "errors");
  }
})

```

## Functions

- `constructor`
```javascript
var k = new Kickass()
```

- `setQuery`
```javascript
k.setQuery("Search Name")
```

- `setSort`
```javascript
k.setSort({
  field: "seeders",
  sorder: "desc"
});
```

- `run`
```javascript
k.run(function(errors, data) {
            //console.log(data);
            if (! errors.length > 0) {
                done();
                //console.log(data.length);
            } else {
                //console.log(errors);
            }
        });
```

-----

### Disclaimer
There are obvious legal issues, with downloading copyrighted material you do not have a license for. We do not endorse such use cases and take no responsibility for the use people make of it.
