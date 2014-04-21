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
.run(function(error, data) {
  /*
  this  {context} => Current Context is set to be `k`.
  error  {error} => An Error object representing the error encountered
  data    {array} => An array of Torrent.
  */
  if (error === null) {
    // No errors occured.
    console.log(data.length, "results");
    console.log(
      errors,     // Error object, will be null if no error
      data       // Array of Torrent read from this `run`.
      );
  } else {
    // An error occurred.
    console.log(error, "error");
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
k.run(function(error, data) {
            //console.log(data);
            if (error === null && data !== null) {
                    done();
            }
        });
```

-----

### Disclaimer
There are obvious legal issues, with downloading copyrighted material you do not have a license for. We do not endorse such use cases and take no responsibility for the use people make of it.
