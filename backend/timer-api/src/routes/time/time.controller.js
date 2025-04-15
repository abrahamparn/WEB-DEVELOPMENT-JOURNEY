function httpGetSpecificTime(req, res) {
  let dateId = req.params.id;

  let result;
  let myDate;

  if (!Number(dateId)) {
    //check string to date
    let date = new Date(dateId);
    result = date;
    myDate = date.getTime();
  }
  //check unix date to string
  if (Number(dateId)) {
    let date = new Date(Number(dateId));
    result = new Date(Number(dateId));
    myDate = date.getTime();
  }

  if (isNaN(result) || isNaN(result)) {
    return res.status(400).json({
      error: "Not a date",
    });
  }
  return res.status(200).json({
    unix: myDate,
    utc: result.toUTCString(),
  });
}

function httpGetCurrentTime(req, res) {
  let time = Date.now();
  let today = new Date(time);
  return res.status(200).json({
    currentTime: today.toUTCString(),
  });
}
module.exports = {
  httpGetSpecificTime,
  httpGetCurrentTime,
};
