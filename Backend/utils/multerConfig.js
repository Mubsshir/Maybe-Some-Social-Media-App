
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName=req.userInfo.uid + "-" + Date.now() + file.originalname;
    req.filePath=path.join('/uploads',fileName);
    return cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
});

module.exports = upload;
