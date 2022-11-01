const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mangoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://ScottShaka:ScottShaka@cluster0.25sit4c.mongodb.net/Shop?retryWrites=true&w=majority"
).then(()=>console.log("DBConnection Succesfull!")).catch((err)=>{
    console.log(err);
});


app.listen(5000,()=>{
    console.log("The backend is running")
})