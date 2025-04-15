const express = require("express");

const exerciseTrackerController = require("./exerciseTracker.controller");
const exerciseTrackerRouter = express.Router();
exerciseTrackerRouter.get("/", (req, res) => {
  return res.status(200).json({ success: "Hai Kamu" });
});
exerciseTrackerRouter.post("/", exerciseTrackerController.httpPostNewUser);
exerciseTrackerRouter.post(
  "/:_id/exercises",
  exerciseTrackerController.httpPostNewExercise
);
exerciseTrackerRouter.get(
  "/:_id/logs",
  exerciseTrackerController.httpGetUserLog
);

module.exports = {
  exerciseTrackerRouter,
};
