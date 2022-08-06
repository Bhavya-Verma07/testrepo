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
},{
    timestamps:true
});

//tell the mongo about model
const savedmodel = mongoose.model("user1", userModel);
module.exports= savedmodel;
//here we are exporting in crud.js