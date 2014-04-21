var assert = require("assert");
var Kickass = require("../index.js");

describe('Search', function () {
    describe('#Query()', function () {

        it('should query without error', function (done) {

            var k = new Kickass(
                { 'query': 'Ubuntu 14.04' }
            );
            // k.query = "Almost Human";
            k.run(function (error, data) {
                //console.log(data);
                if (error === null && data !== null) {
                    done();
                }
            });

        }),
            it('should return empty results', function (done) {

                var k = new Kickass(
                    { 'query': 'AAAZZZEEERRRTTTTTYYYUUUIIIOOOPPPLKHG51564515' }
                );
                k.run(function (error, data) {
                    //console.log(data);
                    if (error === null && data.length === 0) {
                        done();
                    }
                });

            })

    })
})