var ArticlesProvider=require('../config/articlesProvider.js').articlesProvider;
var articlesProvider=new ArticlesProvider;
var textOne = {
    title: "Apollo",
    text: "Some text about Apollo moon landings",
    tags: [ "月亮", "apollo阿波罗号", "航天","text"]
};
var textTwo={
    title: "full text search",
    text : "this is a test text ." ,
    tags : [ "this" , "is" , "a","test","text" ]
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
        result.forEach(function (data,index){
            console.log((index+1)+" : "+data.text);
        });
    });
}

//db.articles.find()