


exports.getFeeds=(req,res)=>{
  console.log(req.session)
  res.json({"message":"Fetching post"});
}