require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const mongo = require("./src/service/mongo");

//call router
const urlShortenerRouter = require("./src/controller/url_shortener.router");
// Basic Configuration
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Middleware to parse URL-encoded bodies. Important!
app.use(express.urlencoded({ extended: true }));

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.use("/api/shorturl", urlShortenerRouter.urlShortenerRouter);

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
