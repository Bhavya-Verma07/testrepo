const express = require("express");
const app = express();

app.use(express.json());

//code for creating server
let port = 5000;
app.listen(port, () => console.log(`server is running at ${port}`));

//when we need to send data from frontend to backend
app.post("/signup", (req, res) => {
  try {
    console.log(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.post("/contactus", (req, res) => {
  try {
    console.log(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.post("/yourdetails", (req, res) => {
  try {
    console.log(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

app.post("/books", (req, res) => {
    try {
      console.log(req.body);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  });


