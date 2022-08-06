const mongoose= require("mongoose");

const followersModel= new mongoose.Schema({
    followers : String,
    following: String
});

//tell the mongo about model
const createmodel = mongoose.model("follower", followersModel);
module.exports= createmodel;
//here we are exporting in crud.js