const mongoose= require("mongoose");

const messageModel= new mongoose.Schema({
    name: String,
    mob_no : String,
    textmessage : String
});

//tell the mongo about model
const inboxmodel = mongoose.model("message", messageModel);
module.exports= inboxmodel;
//here we are exporting in crud.js