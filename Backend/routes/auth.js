const express=require("express");
const router=express.Router();
const authController=require("../controller/auth");
const isAuth = require("../middlewares/is-auth");


router.get("/users",isAuth,authController.getUsers);
router.post("/signup",authController.postSignUp)
router.post("/login",authController.postLogin)
router.post("/logout",isAuth,authController.postLogout)


module.exports=router;