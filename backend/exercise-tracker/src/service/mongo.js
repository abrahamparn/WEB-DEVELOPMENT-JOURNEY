require("dotenv").config();

const mongoose = require("mongoose");

const MONGGO_URL = process.env.MONGGO_URL;
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(`an error occured: ${err}`);
});

async function mongoConnect() {
  await mongoose.connect(MONGGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
