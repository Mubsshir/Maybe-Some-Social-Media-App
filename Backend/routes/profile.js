const express=require("express");
const router=express.Router();
const upload = require("../utils/multerConfig");
const isAuth = require("../middlewares/is-auth");
const profileController=require('../controller/profile')


router.post('/upload',isAuth, upload.single('file') ,profileController.postProfilePicture);
router.post('/profile',isAuth,profileController.getUser )


module.exports=router;



