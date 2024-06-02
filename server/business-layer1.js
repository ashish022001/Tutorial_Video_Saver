var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").mongoClient;

var conStr = "mongodb://127.0.0.1:27017";

var app = express();

app.get("/",(request,response)=>{
    response.send("<h2>API Home </h2>")
});
app.get("/products" ,(request,response)=>{
    response.send([{Name:"TV",Price:36500},{Name:"Mobile",Price:5630}])
});
app.get("/categories",(req,res)=>
{
    res.send(`
    <Categories>
        <Category>
            <Id>1</Id>
            <Name>Electronics</Name>
        </Category>
    </Categories>
    `);
});

app.get("/details/:id/:name",(req,res)=>
{
    res.send(`
        id : ${req.params.id}<br>
        name : ${req.params.name}
    `)
})
app.get("/customers",(req,res)=>{
        mongoClient.connect(conStr)
        .then(obj=>{
            var database = obj.db("tutorial")
            database.collection("customers").find({}).toArray().then(documents=>{
                res.send(documents);
                res.end();
            })
        })
        .catch(err=>{
            console.log(err)
        })
});

app.post("/registercustomer",(req,res)=>{
    var customerDetails ={
        
    }
})

app.listen("5000");
console.log(`Server Started : http://127.0.0.1:5000`); 