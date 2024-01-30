const USER = require("../model/auth");

exports.postProfilePicture = async (req, res) => {
  const img = req.filePath;
  const uid = req.userInfo.uid;
  try {
    const result = await USER.saveProfilePic(uid, img);
    if (result.status == 1) {
      return res.status(200).json({ message: result.message });
    } else {
      return res.status(201).json({ message: result.message });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const uid = req.body.uid;
    console.log(req.body)
    const result = await USER.getProfile(uid);
    console.log(result)
    if (result) {
      return res.status(200).json(result);
    }
  } catch (err) {
    console.log("Error: ", err);
    return res.status(500).json({ message: err });
  }
};
