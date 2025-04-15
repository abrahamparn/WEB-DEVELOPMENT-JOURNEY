const userModel = require("../model/users.model");
const mongoose = require("mongoose");
async function httpPostNewUser(req, res) {
  try {
    const userName = req.body.username;
    const userObject = await userModel.saveUser(userName);
    return res
      .status(200)
      .json({ username: userObject.username, _id: userObject._id });
  } catch (err) {
    return res.status(500).json({ error: `something is error (${err})` });
  }
}

async function httpPostNewExercise(req, res) {
  try {
    const id = req.params["_id"];
    // validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such user" });
    }
    if (!(await userModel.checkUserById(id))) {
      return res.status(400).json({ error: "No such user" });
    }

    const description = req.body.description;
    if (
      description === null ||
      description === undefined ||
      description === ""
    ) {
      return res.status(400).json({ error: "Please input description" });
    }

    const duration = req.body.duration;
    if (!Number(duration)) {
      return res.status(400).json({ error: "Please input duration number" });
    }

    let date = req.body.date;
    if (date && isNaN(Date.parse(date))) {
      return res.status(400).json({ error: "Invalid date format" });
    } else if (!date || date.trim() === "") {
      date = new Date().toDateString();
    } else {
      date = new Date(date).toDateString();
    }

    const exerciese = await userModel.insertExercise(
      id,
      description,
      duration,
      date
    );

    return res.status(200).json(exerciese);
  } catch (err) {
    return res.status(500).json({ err: err });
  }
}

async function httpGetUserLog(req, res) {
  const id = req.params["_id"];

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user" });
  }
  if (!(await userModel.checkUserById(id))) {
    return res.status(400).json({ error: "No such user" });
  }
  let { from, to, limit } = req.query; // Extract query parameters

  const userLogs = await userModel.showUserLogs(id, from, to, limit);
  return res.status(200).json(userLogs);
}
module.exports = {
  httpPostNewUser,
  httpPostNewExercise,
  httpGetUserLog,
};
