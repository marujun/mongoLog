require('../config/Config.js');
var util = require('util'),
    fs = require('fs'),
    exec = require('child_process').exec;
//mmseg(function(){
//    console.log("------------分词完成！---------------");
//    indexer(function (){
//        console.log("------------建立索引完成！---------------");
//        search("Sphinx",function(){
//            console.log("------------查询完成！---------------");
//        });
//    });
//});
//
//main(function (){console.log("-------------建立主索引完成！-----------------")});
//delta(function (){console.log("-------------建立增量索引完成！-----------------")});
merge(function (){console.log("-------------合并索引完成！-----------------")});


function mmseg(callback){            //切词
    console.log(global.mmseg + " -d "+ global.wordBank +" "+global.xmlPath );
    exec(global.mmseg + " -d "+ global.wordBank +" "+global.xmlPath,
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
function search(str,callback){                  //搜索
    console.log(global.search + " -c "+ global.confPath +" "+str);
    exec(global.search + " -c "+ global.confPath +" "+str,
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
function indexer(callback){              //建立全部索引
    console.log(global.indexer + " -c "+ global.confPath +" --all");
    exec(global.indexer + " -c "+ global.confPath +" --all",
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
function main(callback){            //建立主索引
    console.log(global.indexer + " -c "+ global.confPath+" main" );
    exec(global.indexer + " -c "+ global.confPath+" main"  ,
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
function delta(callback){          //做增量索引
    console.log(global.indexer + " delta -c "+ global.confPath );
    exec(global.indexer + " delta -c "+ global.confPath ,
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
function merge(callback){                   //合并索引
    console.log(global.indexer + " --merge main delta --rotate -c " +global.confPath );
    exec(global.indexer + " --merge main delta --rotate -c " +global.confPath  ,
        function (error, stdout, stderr) {
            if (error) { console.log("error : ",error); }
            if(stderr ){console.log('stderr : ' + stderr); }
            console.log(stdout);
            callback();
        });
}
