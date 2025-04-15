"use strict";

const issueModel = require("../model/issues.model");

module.exports = function (app) {
  app
    .route("/api/issues/:project")

    .get(async (req, res) => {
      try {
        let project = req.params.project;
        let query = req.query;
        let final = await issueModel.getAllIssue(project, query);
        return res.status(200).json(final);
      } catch (err) {
        return res.status(200).json({ code: 500, message: `Error: ${err}` });
      }
    })

    .post(async (req, res) => {
      let project = req.params.project;
      let body = req.body;
      if (!(body.issue_title && body.issue_text && body.created_by)) {
        return res.json({ error: "required field(s) missing" });
      }
      const result = await issueModel.createIssue(body, project);
      return res.json(result);
    })

    .put(async (req, res) => {
      try {
        let body = req.body;
        if (!body._id) return res.json({ error: "missing _id" });
        const updateResult = await issueModel.updateIssue(body);
        return res.json(updateResult);
      } catch (err) {
        return { error: "no update field(s) sent", _id: req.body._id };
      }
    })

    .delete(async (req, res) => {
      let body = req.body;
      if (!body._id) return res.json({ error: "missing _id" });
      const result = await issueModel.deleteIssue(body._id);
      return res.json(result);
    });
};
