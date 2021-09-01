const express = require('express');

const app = express(); //express objects


//Applying middleware to convert unreadable data to json objects
app.use(express.json());
/*
GET - to get data
POST - to create dataset
PUT - to create or update dataset
PATCH - to update dataset
DELETE - to delete dataset
*/

//Type of Request
//URL

//localhost:8000/dummy - get
app.get("/dummy", (req, res)=> {
    res.send({
        message:"GET Working!"
    })
});

app.post("/create", (req, res)=> {
    const bod = req.body;
    res.send({
        message:"POST Working!",
        bod
    });
})

//Create and Start Server
app.listen(8000, ()=> {                                       
    console.log("Server Live : 8000");
})