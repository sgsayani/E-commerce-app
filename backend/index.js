// define port
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//cDatabase connection with mongodb
mongoose.connect("mongodb+srv://sgsayani_ghatak:Sayani%40123@cluster0.y2v4edg.mongodb.net/e-commerce");

//API creation

app.get("/",(req,res)=>{
    res.send("Express app is running")
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port " + port)
    }
    else{
        console.log("Error : " + error)
    }
})