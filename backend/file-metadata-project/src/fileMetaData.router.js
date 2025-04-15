const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const fileMetaDataRouter = express.Router();

const uploadDir = path.join(__dirname, "..", "uploads");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

fileMetaDataRouter.post("/", upload.single("upfile"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  // Respond with the file metadata
  res.status(200).json({
    fileName: req.file.originalname,
    fileType: req.file.mimetype,
    fileSize: req.file.size,
  });
});

module.exports = {
  fileMetaDataRouter,
};
