
global.mongodbHost = 'localhost';
global.serverIP="192.168.1.102";
global.mongodbPort = 27017;
global.mongodbDB = 'test';
global.listenerPort = 3000;

//public/coreseekPack/etc/cstf.conf中source和index的路径需要自己手动修改

var sourcePath=__dirname+"/../public/",//资源路径
    mmsegPath="/usr/local/mmseg3/",//mmseg安装路径
    coreseekPath="/usr/local/coreseek/bin/",//coreseek安装路径
    sphinxPath="/usr/local/sphinx/bin/";
//coreseek时使用
//global.indexer = coreseekPath+"indexer";
//global.search = coreseekPath+"search";
//shinx时使用
global.indexer = sphinxPath+"indexer";
global.search = sphinxPath +"search";

//sudo indexer --merge main delta --rotate -c /Users/mrj/WebStormProject/demo/mongo/config/../public/coreseekPack/etc/csft.conf
//sudo searchd -c /Users/mrj/WebStormProject/demo/mongo/config/../public/coreseekPack/etc/csft.conf
//sudo searchd --stop -c /Users/mrj/WebStormProject/demo/mongo/config/../public/coreseekPack/etc/csft.conf

global.mmseg = mmsegPath+"bin/mmseg";
global.confPath = sourcePath+"coreseekPack/etc/csft.conf";
global.xmlPath = sourcePath+"coreseekPack/var/xml/";
global.wordBank = mmsegPath+"etc";//词库路径