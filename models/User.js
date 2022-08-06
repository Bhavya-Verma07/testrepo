const mongoose= require("mongoose");

const userModel= new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});

//tell the mongo about model
const savedmodel = mongoose.model("user", userModel);
module.exports= savedmodel;
//here we are exporting in crud.js
