const express = require("express");
const databaseconnection= require("./connectors/dbconnection");
const app = express();
const USER_MODEL = require("./models/User");
//// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

app.post("/signup", async(req, res) => {
    try {
        const comingData =req.body;
        console.log(comingData);
//code for creating new data
const newUser= new USER_MODEL({
  name: "BHAVYA",
  age: 20,
  email:"me.bhvayaverma111@gmail.com",
  password: "12345",
});
      await newUser.save();  
      res.json({ success: true, data: "New data created." });
    } catch (error) {
        console.log(error);
      res.status(400).json({ success: false , error: error.message});
    }
  });
  databaseconnection();

  //code for creating server
let port = 5000;
app.listen(port, () => console.log(`server is running at ${port}`));
