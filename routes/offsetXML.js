require('../config/Config.js');
var fs = require('fs'),
    exec = require('child_process').exec;
var MongoLogProvider=require('../config/mongoLogProvider.js').mongoLogProvider;
var mongoLogProvider=new MongoLogProvider;
var ObjectID = require('mongodb').ObjectID;
var SphinxClient = require ("sphinxapi"),
    util = require('util'),
    assert = require('assert');

var id1=new ObjectID(), id2=new ObjectID();
var article1={_id:id1,subject:'net.createServer',id:23,content:"Limestone is queueing now: "+"\n"+"You can safely call limestone.query or limestone."+"\n"+"build_excerpts methods outside the scope of the callback functions, provided the connection is made persistent. "+"\n"+"Limestone will enqueue the sphinx commands and run them sequentially.",published:"1270131607",author_id:1};
var article2={_id:id2,subject:'Bonus',id:24,content:"bonus: persistent connection: "+"\n"+"You can ask sphinx to open a persistent connection. "+"\n"+"You can then make several request through the same connection",published:"1270131607",author_id:2};
var template='      <sphinx:schema>'+"\n"
    +'            <sphinx:field name="subject"/>'+"\n"
    +'            <sphinx:field name="content"/>'+"\n"
    +'            <sphinx:attr name="published" type="timestamp"/>'+"\n"
    +'            <sphinx:attr name="author_id" type="int" bits="16" default="1"/>'+"\n"
    +'      </sphinx:schema>'+"\n";
var data=new Array;
data.push(article1);
data.push(article2);

var queryWord="queueing";
var cl = new SphinxClient();
cl.SetServer('localhost', 9312);
cl.Query(queryWord, function(err, result) {
    assert.ifError(err);
//    console.log(util.inspect(result, false, null, true));
    if(result.matches[0]){
        findOne(result.matches[0].id,function (results){
            console.log("result : ",results);
            console.log("偏移量: "+results.content.indexOf(result.words[0].word));
        });
    }else{console.log("未找到匹配的！");}
});

//insert(article1);
//insert(article2);
//
//writeXml(template,data,function (data){
//    console.log("写入xml文件: "+"\n",data);
//    indexer(function (){
//        console.log("-------------建立所有索引完成！-----------------");
//        merge(function () {console.log("-------------合并索引完成！-----------------");});
//    });
//});
function insert(data){
    mongoLogProvider.insert(data,{},function(err,result){
        if(err){console.log('err:',err);}
//        setTimeout(function (){a();},500);
    });
}
function findOne(data,callback){
    var findResult={};
    mongoLogProvider.find({},{},function(err,result){
        if(err){console.log('err:',err);rt={error:err}}
        result.forEach(function (jsonStr){
            if(jsonStr.id==data){
                callback(jsonStr);
            }
        });
    });
}
function writeXml(template,data,callback){
    var tmp='';
    for(var i=0;i<data.length;i++){
        tmp+='        <sphinx:document id="'+data[i].id+'">'+''+"\n"
            +'            <subject>'+data[i].subject+'</subject>'+''+"\n"
            +'            <published>'+data[i].published+'</published>'+''+"\n"
            +'            <content>'+data[i].content+'</content>'+''+"\n"
            +'            <author_id>'+data[i].author_id+'</author_id>'+''+"\n"
            +'        </sphinx:document>'+''+"\n";
    }
    var str='<?xml version="1.0" encoding="utf-8"?>'+"\n"+'<sphinx:docset>'+"\n"+template+tmp+'</sphinx:docset>';
    fs.writeFile(global.xmlPath + "delta.xml", str, "utf8", function (err, result) {
        if(err){console.log(err);}
        callback(str);
    });
}
function indexer(callback) {              //建立全部索引
    console.log(global.indexer + " -c " + global.confPath + " --all  --rotate ");
    exec(global.indexer + " -c " + global.confPath + " --all  --rotate ",
        function (error, stdout, stderr) {
            if (error) {
                console.log("error : ", error);
            }
            if (stderr) {
                console.log('stderr : ' + stderr);
            }
            console.log(stdout);
            callback();
        });
}
function merge(callback) {                   //合并索引
    console.log(global.indexer + " --merge main delta --rotate -c " + global.confPath);
    exec(global.indexer + " --merge main delta --rotate -c " + global.confPath,
        function (error, stdout, stderr) {
            if (error) {
                console.log("error : ", error);
            }
            if (stderr) {
                console.log('stderr : ' + stderr);
            }
            console.log(stdout);
            callback();
        });
}
