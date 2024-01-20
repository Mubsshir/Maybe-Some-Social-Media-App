const express=require("express");
const router=express.Router();
const feedController=require("../controller/feed");
const isAuth = require("../middlewares/is-auth");

router.get("/feed",isAuth,feedController.getFeed);
router.put("/feed",isAuth,feedController.postFeed);
router.delete("/feed",isAuth,feedController.deleteFeed)
router.get('/feeds',isAuth,feedController.getFeeds)
router.post('/like',isAuth,feedController.postLike)

module.exports=router;