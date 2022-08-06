const mongoose = require("mongoose");
const postModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0
  },
  comments: {
    type: Number,
    required: true,
    default: 0
  },
},
{timestamps:true}
);

//tell the mongo about model
const makemodel = mongoose.model("posts", postModel);
module.exports= makemodel;
//here we are exporting in crud.js
