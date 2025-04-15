var express = require("express");
var cors = require("cors");
require("dotenv").config();

var app = express();

//call router
const fileMetaDataRouter = require("./src/fileMetaData.router");

//basic configurtaion
const PORT = process.env.port || 3000;

//some legacy browsers choke on 204
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.json());

// public and html
app.use("/public", express.static(process.cwd() + "/public"));
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Middleware to parse URL-encoded bodies. Important!
app.use(express.urlencoded({ extended: true }));

//calling all the router
app.use("/api/fileanalyse", fileMetaDataRouter.fileMetaDataRouter);

//starting the server
function startServer() {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
