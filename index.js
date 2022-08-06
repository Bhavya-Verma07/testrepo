const express = require("express");
const app = express();
app.use(express.json());

//writing first REQUEST for frontend //writing first index for API //writing an API

app.get("/followers", (req, res) => {
  try {
    res.json({ success: true, data: "Name of all the Followers." });
  } catch (error) {
    res.json({ success: false });
  }
});

app.get("/Messages", (req, res) => {
  try {
    res.json({ success: true, data: "All the messages are displayed." });
  } catch (error) {
    res.json({ success: false });
  }
});

app.get("/settings", (req, res) => {
  try {
    res.json({ success: true, data: "Required settings." });
  } catch (error) {
    res.json({ success: false });
  }
});

app.get("/activityStatus", (req, res) => {
  try {
    res.json({ success: true, data: "You are active now." });
  } catch (error) {
    res.json({ success: false });
  }
});

app.get("/notifications", (req, res) => {
  try {
    res.json({ success: true, data: "you have 5 new notifications" });
  } catch (error) {
    res.json({ success: false });
  }
});

//code for creating server
let port = 5000;
app.listen(port, () => console.log(`server is running at ${port}`));

