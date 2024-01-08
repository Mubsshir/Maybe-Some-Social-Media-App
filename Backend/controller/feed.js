
const Feed=require('../model/feed')




exports.getFeeds=(req,res)=>{
  console.log(req.session)
  res.json({"message":"Fetching post"});
}

exports.postFeed=async (req,res)=>{
  try{
    const {content,image}=req.body;
    console.log(req.session)
    const uid=req.session.userID;
    const feed=new Feed(uid,content,image);
    const result=await feed.save();
    if(result){
      return res.status(200).json({message:"Post saved"});
    }else{
      return res.json({message:"Opps somthing went wrong..."})
    }
  }catch(err){
    return res.json({message:err});
  }
}

exports.getFeed=async(req,res)=>{
  try{
    const uid=req.session.userID;
    console.log(req.ip)
    const result=await Feed.getPostsByUserID(uid);
    if(result.length>0){
      return res.send(result);
    }
    return;
  }catch(err){
    console.log("Somthing went wrong\n"+err);
  }
}