/**
 * Created with JetBrains WebStorm.
 * User: mrj
 * Date: 12-9-10
 * Time: 上午10:54
 * To change this template use File | Settings | File Templates.
 */
var DataProvider = require('./DataProvider.js').DataProvider,
    util = require('util');

var mongoLogProvider = function() {
    console.log("new  mongoLogProvider");
    this.collectionName = "mongoLogs";
};

util.inherits(mongoLogProvider, DataProvider);

exports.mongoLogProvider = mongoLogProvider;
