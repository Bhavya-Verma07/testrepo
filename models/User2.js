const mongoose= require("mongoose");

const userModel= new mongoose.Schema({
    name: {type: String,
    required:true,
    },
    age: {type: Number,
        default:45,
    },
    email: {type: String,
    },
    password: {type: String,

    },
    dob:{
        type: String,
    },
});

//tell the mongo about model
const savedmodel = mongoose.model("user2", userModel);
module.exports= savedmodel;
//here we are exporting in crud.js