var Kickass = require("../index.js");

var k = new Kickass()
    .setQuery('Almost Human')
    .run(function (error, data) {

        if (error === null) {
            console.log(data.length, "results");
        } else {
            console.log(error, "errors");
        }
    })
