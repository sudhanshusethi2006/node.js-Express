var express= require('express');
var moviesRouter= express.Router();
var fs= require('fs')

moviesRouter.route('/').get(function(req,res){
    fs.readFile('movies.json','utf-8',function(err,data){

    if(err) throw err;
    res.header("Content-Type",'application/json');
    res.send(data);
    

    })
})
moviesRouter.route('/details').get(function(req,res){
res.send('This is movies details page')
})


// making this route available outside
module.exports=moviesRouter;

