const { response, json } = require("express");
const User = require("../model/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MyNameIsKhan";

//get the userinfo from req.userInfo uid:req.userInfo.uid

exports.getUsers = async (req, res) => {
  const users = await User.fetchAllUser();
  res.json(users);
};

exports.postSignUp = async (req, res) => {
  const cryptPass = await bcrypt.hash(req.body.pass, 12);
  const user = new User(req.body.username, "", cryptPass); //Later I will add the provision for email
  const result = await user.save();
  return res.json(result);
};

exports.postLogin = async (req, res) => {
  console.log("In Login....");
  console.log(req.body);
  const { username, pass } = req.body;

  const result = await User.FindUserCred(username);
  if (result.pass) {
    const passMatch = await bcrypt.compare(pass, result.pass);
    if (passMatch) {
      const AuthToken = jwt.sign(
        { uid: result.uid, username: username },
        SECRET_KEY,
        { expiresIn: "1hr" }
      );
      return res.json({ AuthToken });
    } else {
      return res.status(401).json({ message: "invalid username/password" });
    }
  }
  res.status(401).json({ message: "user not registered ,please signup" });
};

exports.getAuthStatus = (req, res) => {
  console.log("verifying token....");
  const device = req.headers["user-agent"];
  const ticket = req.headers["authorization"].split(" ")[1];
  if (!ticket) {
    console.log(device, " is Not verified");
  }
  try {
    jwt.decode(ticket);
    const deco = jwt.decode(ticket, SECRET_KEY);
    console.log(deco.exp);
    const isValid = jwt.verify(ticket, SECRET_KEY);
    if (isValid) {
      console.log("User is valid");
      return res.status(200).json({ isValid });
    } else {
      console.log("Invalid User");
      return res.status(401).json({ message: "You are not authorized" });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const uid = req.userInfo.uid;
    const result = await User.getProfile(uid);
    if (result) {
      return res.status(200).json(result);
    }
  } catch (err) {
    console.log("Error: ", err);
    return res.status(500).json({ message: err });
  }
};
