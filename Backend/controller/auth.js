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
try{
  console.log(req.body)
  const cryptPass = await bcrypt.hash(req.body.pass, 12);
  const {firstName,lastName,email,dob,username}=req.body;

  const user = new User(firstName,lastName,username,email,dob,cryptPass); //Later I will add the provision for email
  const result = await user.save();
  if(result.status=1){
    console.log("User Created");
    return res.status(200).json({message:result.message})
  }
  else{
    console.log("User exist");
    return res.status(401).json({message:result.message});
  }
}catch(err){
  console.log("Error while signing up the user: ",err);
  return res.status(500).json({message:err});
}
};

exports.postLogin = async (req, res) => {
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
      return res.json({ AuthToken,uid:result.uid });
    } else {
      return res.status(401).json({ message: "invalid username/password" });
    }
  }
  res.status(401).json({ message: "user not registered ,please signup" });
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
