var SphinxClient = require ("sphinxapi"),
    util = require('util'),
    assert = require('assert');

var cl = new SphinxClient();
cl.SetServer('localhost', 9312);
cl.Query('test','xml','', function(err, result) {
    assert.ifError(err);
    console.log(util.inspect(result, false, null, true));
});
//cl.Status(function(err, result) {
//    assert.ifError(err);
//    console.log(util.inspect(result, false, null, true));
//});
//var limestone = require("limestone").SphinxClient(),
//    sys = require("sys");
//
//limestone.connect(9312, // port. 9312 is standard Sphinx port. also 'host:port' allowed
//    function(err) { // callback
//        if (err) {
//            sys.puts('Connection error: ' + err);
//        }
//        sys.puts('Connected, sending query');
//        limestone.query(
//            {'query':'国外', maxmatches:1},
//            function(err, answer) {
//                limestone.disconnect();
//                console.log(answer );
//            });
//    });