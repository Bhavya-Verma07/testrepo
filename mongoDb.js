const express = require("express");
const app = express();
app.use(express.json());

const databaseconnection = require("./connectors/dbconnection");


databaseconnection();

//code for creating server
let port = 5000;
app.listen(port, () => console.log(`server is running at ${port}`));
