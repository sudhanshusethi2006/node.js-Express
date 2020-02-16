var express= require('express')
var fs= require('fs')
var app= express()

//Environment variables
var port = process.env.port || 9800;
//var port =9800;

app.get('/', function(req,res){
        res.send("This is an express server");
})

// you can create routes in express



////////Routing for Movies///////////////////////

var moviesRouter= require('./src/routes/moviesRoute');


////////Routing for Products///////////////////////

var productsRouter= require('./src/routes/productRoute');

////////////////////////////////////////////////////////STARTING POINT of ROUTES

app.use('/movies',moviesRouter);
app.use('/products',productsRouter);

////////////////////////////////////////




// BASIC WAY OF ROUTING

// app.get('/products', function(req,res){
//     fs.readFile('prod.json','utf-8',function(err,data){

//         if(err) throw err;
//         res.header("Content-Type",'application/json');
//         res.send(data);
        

//     })
// })
// app.get('/details',function(req,res){
// res.send('This is product details page')

// })

// app.get('/movies', function(req,res){
//     fs.readFile('movies.json','utf-8',function(err,data){

//         if(err) throw err;
//         res.header("Content-Type",'application/json');
//         res.send(data);
        

//     })
// })

// app.get('/details',function(req,res){
//     res.send('This is movies details page')
    
// })


app.listen(port, function(err){
    if(err) throw err;
    console.log("server is running on port : "+  port);
    })
