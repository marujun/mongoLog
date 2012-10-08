
global.mongodbHost = 'localhost';
global.serverIP="192.168.1.102";
global.mongodbPort = 27017;
global.mongodbDB = 'test';
global.listenerPort = 3000;

//public/coreseekPack/etc/cstf.conf中source和index的路径需要自己手动修改

var sourcePath=__dirname+"/../public/",//资源路径
    mmsegPath="/usr/local/mmseg3/",//mmseg安装路径
    coreseekPath="/usr/local/coreseek/bin/";//coreseek安装路径






global.mmseg = mmsegPath+"bin/mmseg";
global.indexer = coreseekPath+"indexer";
global.search = coreseekPath+"search";
global.confPath = sourcePath+"coreseekPack/etc/csft.conf";
global.xmlPath = sourcePath+"coreseekPack/var/xml/test.xml";
global.wordBank = mmsegPath+"etc";