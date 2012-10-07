var ArticlesProvider=require('../config/articlesProvider.js').articlesProvider;
var articlesProvider=new ArticlesProvider;
var textOne = {
    title: "Apollo",
    text: "Some text about Apollo moon landings",
    tags: [ "moon", "apollo阿波罗号", "航天","text"]
};
var str="this is a test text.";
var tmp = str.split(/\s+|\.+|,+/);//用逗号，空格，句号分隔开
var textTwo={
    title: "full text search",
    text : str ,
    tags : tmp
};
var searchContent={ tags:"text"};
//insertTxt();
searchTxt();
function insertTxt(){
    articlesProvider.insert(textOne,{},function(err,result){
        if(err){console.log('insert err:',err);}
    });
    articlesProvider.insert(textTwo,{},function(err,result){
        if(err){console.log('insert err:',err);}
    });
}

function searchTxt(){
    articlesProvider.find(searchContent,{},function(err,result){
        if(err){console.log('search err:',err);}
        console.log("the search result is :");
        if(result){
            result.forEach(function (data,index){//依次输出查询结果
                console.log((index+1)+" : "+data.text);
            });
        }
    });
}

//正则表达式参考：http://deerchao.net/tutorials/regex/regex.htm
//db.articles.find()