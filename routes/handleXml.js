//   https://github.com/robrighter/node-xml
require('../config/Config.js');
var util = require('util');
var xml = require("node-xml");

var parser = new xml.SaxParser(function(cb) {
    cb.onStartDocument(function() {

    });
    cb.onEndDocument(function() {

    });
    cb.onStartElementNS(function(elem, attrs, prefix, uri, namespaces) {
        console.log("=> Started:   elem:"+elem+"  attrs:"+JSON.stringify(attrs));
//        util.log("=> Started: " + elem + " uri="+uri +" (Attributes: " + JSON.stringify(attrs) + " )");
    });
    cb.onEndElementNS(function(elem, prefix, uri) {
        console.log("=> End: " + elem);
//        util.log("<= End: " + elem + " uri="+uri + "\n");
        parser.resume();
//        parser.pause();// pause the parser
//        setTimeout(function (){parser.resume();}, 10); //resume the parser
    });
    cb.onCharacters(function(chars) {
        //util.log('<CHARS>'+chars+"</CHARS>");
    });
    cb.onCdata(function(cdata) {
        util.log('<CDATA>'+cdata+"</CDATA>");
    });
    cb.onComment(function(msg) {
        util.log('<COMMENT>'+msg+"</COMMENT>");
    });
    cb.onWarning(function(msg) {
        util.log('<WARNING>'+msg+"</WARNING>");
    });
    cb.onError(function(msg) {
        util.log('<ERROR>'+JSON.stringify(msg)+"</ERROR>");
    });
});


//example read from file
parser.parseFile(__dirname+"/xmlfile.xml");
//parser.parseFile(global.xmlPath+"/main.xml");