var express= require('express');
var fs= require('fs')
var productRouter= express.Router();


productRouter.route('/').get(function(req,res){
    fs.readFile('prod.json','utf-8',function(err,data){

        if(err) throw err;
        res.header("Content-Type",'application/json');
        res.send(data);
        

    })

})

productRouter.route('/details').get(function(req,res){
    res.send('This is product details page')

})
// making this route available outside
module.exports=productRouter;