const dns = require("node:dns").promises;
const url = require("node:url");
const shortUrlModel = require("../model/urlShortener.model");

async function httpPostUrlShortener(req, res) {
  try {
    const theUrl = new url.URL(req.body.url);
    if (!theUrl.hostname) {
      return res.status(400).json({ error: "invalid url" });
    }

    // Await the promise returned by dns.lookup
    try {
      await dns.lookup(theUrl.hostname);
    } catch (err) {
      return res.status(400).json({ error: "invalid url" });
    }

    // Now we are sure the DNS lookup was successful
    if (await shortUrlModel.checkUrlExists(theUrl)) {
      let theShortUrl = await shortUrlModel.getId(theUrl);
      return res.status(200).json({
        original_url: req.body.url,
        short_url: theShortUrl,
      });
    }
    const newNumber = await shortUrlModel.saveNewUrl(theUrl);
    return res.status(200).json({
      original_url: req.body.url,
      short_url: newNumber,
    });
  } catch (err) {
    return res.status(400).json({ error: "invalid url" });
  }
}
async function httpGetUrlShortener(req, res) {
  let id = req.params.id;
  if (isNaN(id)) return res.status(400).json({ error: "bad parameter" });

  if (!(await shortUrlModel.checkDoesIdExsist(id)))
    return res.status(400).json({
      error: "No short URL found for the given input",
    });

  let theOldUrl = await shortUrlModel.getUrl(id);
  return res.redirect(theOldUrl);
}

async function httpGetUrlShortenerDefault(req, res) {
  let theOldUrl = await shortUrlModel.getUrl(1);
  return res.redirect(theOldUrl);
}

module.exports = {
  httpPostUrlShortener,
  httpGetUrlShortener,
  httpGetUrlShortenerDefault,
};
