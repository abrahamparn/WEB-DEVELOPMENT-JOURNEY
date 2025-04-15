function httpGetHeader(req, res) {
  console.log(req.headers);

  return res.status(200).json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
}

module.exports = {
  httpGetHeader,
};
