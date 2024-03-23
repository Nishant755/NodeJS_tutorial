
// const HTTP = require("http");

// let SERVER=HTTP.createServer();
// SERVER.listen(5000,()=>{console.log('server is running')});


const express=require('express');
const app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is Running on  port ${PORT}`);
});
app.get( '/get' , (req,res) => {
    console.log("hello diksha is very good  girl") ;
    res.send({name:'Diksha'});
});
