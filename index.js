/**

 */
var request = require('request');
var API_URL = "https://kickass.to/json.php?";

function Kickass(options) {
    if (!(this instanceof Kickass))
        return new Kickass(options);

    options = options || { };

    this.setQuery(options.query);
    this.setSort(options.sort);

    return this;
};

Kickass.prototype.query = "";
Kickass.prototype.sort = {
    field: "seeders",
    sorder: "desc"
}

Kickass.prototype.setQuery = function (query) {
    if (!!query) {
        this.query = query;
    }
    return this;
};

Kickass.prototype.setSort = function (sort) {
    if (!!sort) {
        this.sort = sort;
    }
    return this;
};

Kickass.prototype.run = function (callback) {

    (function (self) {
        request(
            {
                url: API_URL,
                qs: {
                    q: self.query,
                    field: self.sort.field,
                    sorder: self.sort.sorder
                },
                json: true
            }, function (err, res, json) {
                if (err)   return callback && callback.apply(self, [err, null]);
                if (res.statusCode != 200)  return callback && callback.apply(self, [new Error('status code != 200'), null]);

                return callback && callback.apply(self, [null, json.list]);
            });


    })(this);

    return this;
};
exports = module.exports = Kickass;