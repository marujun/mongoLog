var DataProvider = require('./DataProvider.js').DataProvider,
    util = require('util');

var FsfilesProvider = function() {
    console.log("new FsfilesProvider");
    this.collectionName = "fs.files";
}

util.inherits(FsfilesProvider, DataProvider);

exports.FsfilesProvider = FsfilesProvider;