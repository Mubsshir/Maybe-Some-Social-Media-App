const express=require("express");
const router=express.Router();
const feedController=require("../controller/feed");
const isAuth = require("../middlewares/is-auth");

router.get("/feed",isAuth,feedController.getFeed);
router.post("/feed",isAuth,feedController.postFeed);


module.exports=router;