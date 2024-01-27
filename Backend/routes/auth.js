const express=require("express");
const router=express.Router();
const authController=require("../controller/auth");
const isAuth = require("../middlewares/is-auth");


router.get("/users",isAuth,authController.getUsers);
router.post("/signup",authController.postSignUp)
router.post("/login",authController.postLogin)
router.post('/api/isAuth',isAuth,(req,res)=>{res.status(200).json({uid:req.userInfo.uid, message:'Authorized'})})
router.get('/profile',isAuth,authController.getUserProfile )
module.exports=router;