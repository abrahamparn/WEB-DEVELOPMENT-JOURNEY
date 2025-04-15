const express = require("express");
const reqHeaderRouter = express.Router();

const { httpGetHeader } = require("./req_header.controller");

reqHeaderRouter.get("/whoami", httpGetHeader);

module.exports = {
  reqHeaderRouter,
};
