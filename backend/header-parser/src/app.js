const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

const app = express();

//imports for routers
const reqHeaderRouter = require("./routes/req_header/req_header.router");

//some legacy browsers choke on 204
app.use(cors({ optionsSuccessStatus: 200 }));

//for morgan
var dir = path.join(__dirname, "..", "logs");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "logs", "access.txt"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.json());

// for static folder
app.use(express.static(path.join(__dirname, "..", "public")));

//for front end
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

//add router here
app.use("/api", reqHeaderRouter.reqHeaderRouter);

module.exports = app;
