const express = require("express");

const urlsShortenerController = require("./url_shortener.controller");
const urlShortenerRouter = express.Router();

urlShortenerRouter.post("/", urlsShortenerController.httpPostUrlShortener);
urlShortenerRouter.get("/:id", urlsShortenerController.httpGetUrlShortener);
urlShortenerRouter.get("/", urlsShortenerController.httpGetUrlShortenerDefault);

module.exports = {
  urlShortenerRouter,
};
