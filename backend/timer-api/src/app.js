const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");

const app = express();

const timesRouter = require("./routes/time/time.router");

// if you want cors, you can add here
/*
app.use(
    cors({
        origin: "" add here.
    })
);
*/
// for morgan
var dir = path.join(__dirname, "..", "logs"); // you can edit it

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "logs", "access.txt"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

//mounting middleware for times router
app.use("/time", timesRouter.timesRouter);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = app;
