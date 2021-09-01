const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//connecting mongodb
mongoose.connect("mongodb://localhost:27017/pokedata", {useNewUrlParser:true}, ()=> {
    console.log("MongoDB Live :27017");
})

//Schema for Pokemons
const pokeSchema = new mongoose.Schema({
    name: String, 
    type: String, 
    imageURL: String
})

//Model for Pokemons - used to connect Schem and Document
const pokeModel = new mongoose.model('pokemons', pokeSchema);

// function getData() {
//     pokeModel.find((err, data) => {
//         if(err == null) {
//             console.log(data);
//         }

//     });
// }

app.get("/pokemon", (req, res) => {
    pokeModel.find((err, data) => {
        if(err==null) {
            //console.log(data);
            res.send(data);
        }
    })
})

//create a new pokemons
app.post("/pokemon", (req, res) => {
    let pokemon = req.body;
    let pokeObj = new pokeModel(pokemon);
    pokeObj.save((err, data) => {
        if(err == null) {
            res.send("Pokemon Created");
        }
    });
})

//delete pokemon
app.delete("/pokemon/:name", (req, res) => {
    let name = req.params.name;
    pokeModel.deleteOne({name:name}, (err, data) =>{
        if(err==null) {
            res.send({message: "Pokemon Deleted -" + name});
        }
    })
    
})

//fetch single pokemons
app.get("/pokemon/:name", (req, res) => {
    let name = req.params.name;
    pokeModel.find({name:name}, (err, data) =>{
        if(err == null) {
            res.send(data);
        }
    })
})

//update a pokemon 
app.put("/pokemon/:name", (req, res) => {
    let name = req.params.name;
    let pokemon = req.body;
    pokeModel.updateOne({name:name}, pokemon, (err, data) => {
        if(err == null) {
            res.send("Pokemon Updated - "+name);
        }
    });
})

//getData();

app.listen(8000, () => {
    console.log("Server Live: 8000");
})