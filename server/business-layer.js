var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var app = express();

// app.get("/", (request, response) => {
//   response.send("<h2>API Home</h2>");       //common both ex 1st and 2nd
// });

//---------------------2nd Example----------------------
// app.post("/addProduct",(req,res)=>{
//     res.send("Post - Insert Data");
// });

// app.put("/updateProduct",(req,res)=>{
//     res.send("PUT - Modifies Date");
// });

// app.delete("/removeProduct",(req,res)=>{
//     req.send("Delete - Remove Data");
// });
//---------------------2nd Example End------------------


// --------------------1st Example ---------------------
// app.get("/products", (request, response) => {
//   response.send([
//     { Name: "TV", Price: 63300.32 },
//     { Name: "Mobile", Price: 652.003 },
//   ]);
// });
// app.get("/categories", (req, res) => {
//   res.send(`
//     <Categories>
//     <Category>
//     <Id>1</Id>
//     <Name>Electronics</Name>
//     </Category>
//     </Categories>

//     `);
// });

// app.get("/details/:id/:name",(req,res)=>
// {
//     res.send(`
//     Id: ${req.params.id}<br>                         // server side
//     Name: ${req.params.name}
//     `);
// });
// ---------------------End 1st Example------------------------


// ------------------Connect With Backend-------------------
app.get("/connect",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017")
    .then(()=>{
        res.send("Connected with Mongodb Server Successfully..")
    })
    .catch((err)=>{
        console.log(err);
    })
})
// -------------------Backend End -------------------------


// app.get("*",(req,res)=>
// {
//     res.send("Requested Path not Found")
// })


app.listen(5000);
console.log(`Server Started : http://127.0.0.1:5000`)
