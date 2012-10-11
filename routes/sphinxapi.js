//   https://github.com/lindory-project/node-sphinxapi
var SphinxClient = require ("sphinxapi"),
    util = require('util'),
    assert = require('assert');

var cl = new SphinxClient();
cl.SetServer('localhost', 9312);
cl.Query('server', function(err, result) {
    assert.ifError(err);
    console.log(util.inspect(result, false, null, true));
});