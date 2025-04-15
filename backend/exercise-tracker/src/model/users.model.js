const users = require("../model/users.mongo");
const mongoose = require("mongoose");

async function saveUser(user) {
  try {
    const userString = user.toString();
    const userInsert = new users({
      _id: new mongoose.Types.ObjectId(),
      username: userString,
      count: 0,
    });
    const userObject = await userInsert.save();
    return userObject;
  } catch (err) {
    throw new Error(err);
  }
}

async function checkUserById(id) {
  try {
    const user = await users.findById(id).select("-__v"); // Simplified and corrected
    if (!user) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw new Error(err);
  }
}

async function getUserName(id) {
  try {
    const userName = await users.findById(id);
    return userName.username;
  } catch (err) {
    throw new Error(err);
  }
}

async function insertExercise(id, description, duration, date) {
  try {
    const updatedUser = await users.findByIdAndUpdate(
      id,
      {
        $push: { log: { description, duration, date } },
        $inc: { counte: 1 },
      },
      { new: true }
    );
    return {
      _id: id,
      username: updatedUser.username,
      description: description,
      duration: duration,
      date: date,
    };
  } catch (err) {
    throw new Error(err);
  }
}

async function showUserLogs(id, from, to, limit) {
  try {
    let userLogsDoc = await users.findOne({ _id: id }).select("-__v");

    // Convert the Mongoose document to a plain object
    let userLogs = userLogsDoc.toObject();
    let logConditions = {};

    if (from && !isNaN(Date.parse(from))) {
      logConditions["log.date"] = { $gte: new Date(from).toDateString() };
      userLogs.from = new Date(from).toDateString();
    }

    if (to && !isNaN(Date.parse(to))) {
      logConditions["log.date"] = logConditions["log.date"] || {};
      logConditions["log.date"].$lte = new Date(to).toDateString();
      userLogs.to = new Date(to).toDateString();
    }

    // Filter the logs based on the 'from' and 'to' conditions
    if (userLogs && userLogs.log.length > 0) {
      userLogs.log = userLogs.log.filter((log) => {
        const logDate = new Date(log.date);
        if (from && logDate < new Date(from)) return false;
        if (to && logDate > new Date(to)) return false;
        return true;
      });

      userLogs.count = userLogs.log.length;
    }

    // Apply limit to the number of logs returned
    if (!isNaN(limit)) {
      userLogs.log = userLogs.log.slice(0, Number(limit));
      userLogs.count = Number(limit);
    }
    return userLogs;
  } catch (err) {
    throw new Error(err);
  }
}
module.exports = {
  saveUser,
  checkUserById,
  getUserName,
  insertExercise,
  showUserLogs,
};
