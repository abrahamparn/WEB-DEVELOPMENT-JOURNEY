const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// mongo service imports
const mongo = require("./src/service/mongo");
//router imports
const exerciseTrackerRouter = require("./src/controller/exerciseTracker.router");

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Middleware to parse URL-encoded bodies. Important!
app.use(express.urlencoded({ extended: true }));

//for any endpoint
app.use("/api/users", exerciseTrackerRouter.exerciseTrackerRouter);

if (process.env.NODE_ENV !== "test") {
  async function startServer() {
    await mongo.mongoConnect();
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }

  startServer();
}

module.exports = app; // Export app for testing
