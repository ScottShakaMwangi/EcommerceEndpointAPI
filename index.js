const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mangoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Succesfull!")).catch((err)=>{
    console.log(err);
});


app.listen(process.env.PORT || 5000, () => {
    console.log("The backend is running")
})