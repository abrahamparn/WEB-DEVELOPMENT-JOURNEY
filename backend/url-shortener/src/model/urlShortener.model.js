const urlShorts = require("./urlShortener.mongo");
const DEFAULT_NUMBER = 0;

async function getLatestDefaultNumber() {
  try {
    const latestNumber = await urlShorts.findOne().sort("-theHash");
    if (!latestNumber) {
      return DEFAULT_NUMBER;
    }

    return Number(latestNumber.theHash);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
async function saveNewUrl(urlShort) {
  try {
    const newNumber = (await getLatestDefaultNumber()) + 1;
    const newUrl = {
      theUrl: urlShort, // Assuming urlShort is a string containing the URL
      theHash: newNumber,
    };
    await urlShorts.updateOne(
      { theUrl: urlShort }, // Use the newNumber as the filter
      { $set: newUrl }, // Use the newUrl object to set values
      { upsert: true }
    );
    return newUrl.theHash; // Return the new hash value
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

async function getUrl(id) {
  try {
    const theUrl = await urlShorts.findOne({ theHash: id });
    return theUrl.theUrl;
  } catch (err) {
    throw new error(err);
  }
}

async function checkDoesIdExsist(id) {
  if (!(await urlShorts.findOne({ theHash: id }))) return false;
  return true;
}

async function getId(url) {
  try {
    const theUrl = await urlShorts.findOne({ theUrl: url });
    return theUrl.theHash;
  } catch (err) {
    throw new error(err);
  }
}

async function checkUrlExists(url) {
  if (!(await urlShorts.findOne({ theUrl: url }))) return false;
  return true;
}

module.exports = {
  saveNewUrl,
  checkDoesIdExsist,
  getUrl,
  checkUrlExists,
  getId,
};
