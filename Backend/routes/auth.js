const express=require("express");
const router=express.Router();
const authController=require("../controller/auth");
const isAuth = require("../middlewares/is-auth");

router.get("/auth",authController.getUsers);
router.post("/auth",authController.postUser)
router.post("/login",authController.postLogin)
router.post("/logout",isAuth,authController.postLogout)


module.exports=router;