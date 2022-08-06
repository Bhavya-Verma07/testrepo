const express = require("express");
const databaseconnection = require("./connectors/dbconnection");
const app = express();
const USER1_MODEL = require("./models/User1");
const USER2_MODEL = require("./models/User2");
const USER_MODEL = require("./models/User");
const POST_MODEL = require("./models/Posts");
const bcrypt = require("bcrypt");
const FOLLOWER_MODEL = require("./models/Followers");
const MESSAGE_MODEL = require("./models/Message");
//// We need to tell our server that we will receive data in form of json from frontend by writing this code
app.use(express.json());

//code for creating "user" model
app.post("/signup", async (req, res) => {
  try {
    const comingData = req.body;
    console.log(comingData);
    // code for creating new data
    const newUser = new USER_MODEL({
      name: comingData.username,
      age: comingData.userage,
      email: comingData.useremail,
      password: comingData.userpassword,
    });
    await newUser.save();
    res.json({ success: true, data: "New data created." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});
//code for getting user data from database
app.get("/alluser", async (req, res) => {
  try {
    console.log("Fetching users from database...");
    const data = await USER_MODEL.find().sort({ age: -1 });
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//creating "followers" model
app.post("/followdata", async (req, res) => {
  try {
    const dataEntry = req.body;
    console.log(dataEntry);
    //code for creating new data
    const newFollower = new FOLLOWER_MODEL({
      followers: dataEntry.followername,
      following: dataEntry.followingname,
    });
    await newFollower.save();
    res.json({ success: true, data: "Another new data created." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//creating code for Message model
// app.post("/messaging", async (req, res) => {
//   try {
//     //shortcut for creating variables=>should be same in model and frontend
//     const { name, mob_no, textmessage } = req.body;
//     const newMessage = new MESSAGE_MODEL({ name, mob_no, textmessage });
//     // const incomingData =req.body;
//     // console.log(incomingData);
//     // code for creating new data
//     // const newMessage= new MESSAGE_MODEL({
//     // name: incomingData.name,
//     // mob_no: incomingData.mob_,
//     // textmessage:incomingData.message,
//     // });
//     await newMessage.save();
//     res.json({ success: true, data: "New incoming data created." });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

//shortcut code for creating User1 model
app.post("/shortcut1", async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    //code for encrypting passwords
    //we must not console the data provided by frontend
    let encryptedpassword = await bcrypt.hash(password, 12); //code for entrypting
    // code for creating new data
    const newUser = new USER1_MODEL({
      name,
      age,
      email,
      password: encryptedpassword,
    });
    await newUser.save();
    res.json({ success: true, data: "New data created." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//code for getting user1 data from database
app.get("/alluser1", async (req, res) => {
  try {
    console.log("Fetching users from database...");
    const data = await USER1_MODEL.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//code for creating User2 model
app.post("/shortcut2", async (req, res) => {
  try {
    const { name, age, email, password, dob } = req.body;
    //code for encrypting passwords
    //we must not console the data provided by frontend
    let encryptedpass = await bcrypt.hash(password, 12); //code for entrypting
    // code for creating new data
    const newUser = new USER2_MODEL({
      name,
      age,
      email,
      password: encryptedpass,
      dob,
    });
    await newUser.save();
    res.json({ success: true, data: "New data created." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//getting user2 data from databse to frontend
app.get("/alluser2", async (req, res) => {
  try {
    console.log("fetching user database...");
    const data = await USER2_MODEL.find().sort({});
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//creating "post" model for posting data from frontednd
app.post("/shortcut3", async (req, res) => {
  try {
    const { title, description, image, likes, comments } = req.body;
    // code for creating new data
    const newUser = new POST_MODEL({
      title,
      description,
      image,
      likes,
      comments,
    });
    await newUser.save();
    res.json({ success: true, data: "New data created." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});
//getting post data from database
// If we want only specific fields from our database, instead of all the fields. E.g. We want only post tiltle, and description, not likes and comments
// In this case , we use projection
// await POST_MODEL.find({filter-condition},{projection})
// Inside model.find(), first bracket describes filtering, while second bracket describes projection
// 1 is used for presence, 0 is used for absence
app.get("/gettingpost", async (req, res) => {
  try {
    console.log("fetching user database...");
    const data = await POST_MODEL.find(
      { title: "sixth post" },
      { title: 1, _id: 0 }
    ).sort({
      createdAt: -1,
    });
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// updating document using PUT
app.put("/updatingdata/:name/:email", async (req, res) => {
  try {
    console.log("updating data of users in database...");
    const updateddata = await USER1_MODEL.findOneAndUpdate(
      { name: req.params.name },
      { email: req.params.email }
    );
    res.json({ success: true, updateddata });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

//deleting document using DELETE
app.delete("/deletingdata/:image", async (req, res) => {
  try {
    console.log("deleting data of users in database...");
    const deletedata = await POST_MODEL.findOneAndDelete({
      image: req.body.image,
    });
    res.json({success:true,deletedata})
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

databaseconnection();
//code for creating server
let port = 5000;
app.listen(port, () => console.log(`server is running at ${port}`));
