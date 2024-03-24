
// const HTTP = require("http");

// let SERVER=HTTP.createServer();
// SERVER.listen(5000,()=>{console.log('server is running')});


const express=require('express');
const app = express();
const bodyParser=require('body-parser');


// data receved from frotein
// middleWare to parse the incoming request body
// app.use(express.json());
app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is Running on  port ${PORT}`);
});

// 1)Run code(server) on nodemon
// 2)Postman warun hit karichi khalchi API
app.get( '/get' , (req,res) => {
    console.log("hello diksha is very good  girl") ;
    res.send({name:'Diksha'});
});

app.post('/post',(req,res)=>{
    // body
    // let data=req.body;
    // console.log((req.body));
    // res.send(data);

    // console.log("hello");
    // params
    // let data=req.query;
    // console.log(data);
    // res.send(data);
})


