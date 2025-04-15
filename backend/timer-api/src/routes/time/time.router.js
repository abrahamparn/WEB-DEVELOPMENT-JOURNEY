const express = require("express");

const timesRouter = express.Router();

const {
  httpGetSpecificTime,
  httpGetCurrentTime,
} = require("./time.controller");

timesRouter.get("/:id", httpGetSpecificTime);
timesRouter.get("/", httpGetCurrentTime);

module.exports = {
  timesRouter,
};
