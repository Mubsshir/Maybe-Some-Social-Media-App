const { response } = require("express");
const User = require("../model/auth");
const bcrypt = require("bcryptjs");


exports.getUsers = async (req, res) => {
  const users = await User.fetchAllUser();
  res.json(users);
};


exports.postSignUp = async (req, res) => {
  const cryptPass = await bcrypt.hash(req.body.pass, 12);
  const user = new User(req.body.username,'', cryptPass);//Later I will add the provison for email 
  const result = await user.save();
  return res.json(result);
};


exports.postLogin = async (req, res) => {
  const { username, pass } = req.body;

  const result = await User.FindUserCred(username);
  if (result) {
    const passMatch = await bcrypt.compare(pass, result.pass);
    if (passMatch) {
      req.session.isAuthenticate = true;
      req.session.userID=result.uid;
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



exports.getAuthStatus=(req,res)=>{
  if(!req.session.isAuthenticate){
    res.json({isAutherized:false});
  }
  else{
    res.json({isAutherized:true})
  }
}