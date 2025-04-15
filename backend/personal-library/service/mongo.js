const mongoose = require("mongoose");

require("dotenv").config();

const DB = process.env.MONGO_URL;
mongoose.connection.once("open", () => {
  console.log("MongoDB Connection Ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(DB);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
