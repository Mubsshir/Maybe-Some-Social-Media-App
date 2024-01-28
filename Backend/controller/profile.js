const USER=require("../model/auth")

exports.postProfilePicture = async(req, res) => {
  const img=req.filePath;
  const uid=req.userInfo.uid;
  try{
    const result=await USER.saveProfilePic(uid,img);
    if(result.status==1){
      return res.status(200).json({ message:result.message })
    }
    else{
      return res.status(201).json({message:result.message});
    }

  }catch(err){
    return res.status(500).json({message:err})
  }

};
