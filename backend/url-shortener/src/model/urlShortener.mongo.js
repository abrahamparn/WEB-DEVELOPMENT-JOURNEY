const mongoose = require("mongoose");

const urlShortsSchema = new mongoose.Schema({
  theUrl: {
    type: String,
    required: true,
  },
  theHash: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("UrlShorts", urlShortsSchema);
