const { response, json } = require("express");
const User = require("../model/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY="KhanTopSecret"
exports.getUsers = async (req, res) => {
  const users = await User.fetchAllUser();
  res.json(users);
};

exports.postSignUp = async (req, res) => {
  const cryptPass = await bcrypt.hash(req.body.pass, 12);
  const user = new User(req.body.username, "", cryptPass); //Later I will add the provison for email
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
        { expiresIn: 3600 * 10 }
      );
      return res.json({ AuthToken });
    } else {
      return res.status(401).json({ message: "invalid username/password" });
    }
  }
  res.status(401).json({ message: "user not registered ,please signup" });
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


exports.getAuthStatus=(req,res)=>{
  const ticket = req.headers['authorization'].split(' ')[1]
  try{
    const isValid=jwt.verify(ticket,SECRET_KEY);
    return res.json({message:isValid})
  }
  catch(err){
    return res.status(500).json({message:err})
  }
}