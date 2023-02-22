const multer = require("multer");
const path = require("path");
const fs = require("fs");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const imageDir = path.join(__dirname, "..", "public");
        if (fs.existsSync(imageDir)) {
            cb(null, imageDir);
        } else {
            fs.mkdirSync(imageDir, {recursive: true});
            cb(null, imageDir);
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
});

module.exports = upload;
