const { response } = require("express");
const User = require("../model/auth");
const bcrypt = require("bcryptjs");
exports.getUsers = async (req, res) => {
  const users = await User.fetchAllUser();
  res.json(users);
};

exports.postUser = async (req, res) => {
  const cryptPass = await bcrypt.hash(req.body.pass, 12);
  const user = new User(req.body.username, req.body.email, cryptPass);
  const result = await user.save();
  return res.json(result);
};

exports.postLogin = async (req, res) => {
  const { username, pass } = req.body;
  const result = await User.FindUserCred(username);
  if (result) {
    console.log(`${username} : ${pass}`);
    const passMatch = await bcrypt.compare(pass, result);
    if (passMatch) {
      req.session.isAuthenticate = true;
      res.json({ message: "success" });
    } else {
      res.json({ message: "invalid username/password" });
    }
    return;
  }
  res.send({ message: "user not found or somthing went wrong" });
};

exports.postLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session..." + err);
      res.status(500).json({ message: "Logout Failed" });
    } else {
      res.clearCookie("connect.sid");
      res.json({ message: "Logout successful" });
    }
  });
};