/**
 * Created with JetBrains WebStorm.
 * User: mrj
 * Date: 12-9-26
 * Time: 下午1:51
 * To change this template use File | Settings | File Templates.
 */
var MongoLogProvider=require('../config/mongoLogProvider.js').mongoLogProvider;
var mongoLogProvider=new MongoLogProvider;
function a(){
  mongoLogProvider.insert({file:'apk'},{},function(err,result){
      if(err){console.log('err:',err);}
      console.log(result);
      setTimeout(function (){a();},500);
  });
}
a();
//sudo ps aux|grep mongod

// sudo kill -9

//db.mongoLogs.find()
//db.mongoLogs.drop()