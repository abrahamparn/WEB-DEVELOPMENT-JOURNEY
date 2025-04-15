const mongoose = require("mongoose");

const logEntrySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  username: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  log: [logEntrySchema],
});

module.exports = mongoose.model("User", userSchema);
