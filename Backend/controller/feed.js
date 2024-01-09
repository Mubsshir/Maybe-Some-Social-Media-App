const Feed = require("../model/feed");

exports.getFeeds = async (req, res) => {
  console.log("Fetching posts....");
  try {
    const result = await Feed.getPosts();
    if (result.length > 0) {
      return res.send(result);
    }
    return res.json({ message: "No post found" });
  } catch (err) {
    console.log("Somthing went wrong\n" + err);
    res.json({ message: "Error while Fetching posts: " + err });
  }
};

exports.postFeed = async (req, res) => {
  try {
    const { content, image } = req.body;
    console.log(req.session);
    const uid = req.session.userID;
    const feed = new Feed(uid, content, image);
    const result = await feed.save();
    if (result) {
      return res.status(200).json({ message: "Post saved" });
    } else {
      return res.json({ message: "Opps somthing went wrong..." });
    }
  } catch (err) {
    return res.json({ message: err });
  }
};

exports.getFeed = async (req, res) => {
  try {
    const uid = req.session.userID;
    console.log(req.ip);
    const result = await Feed.getPostsByUserID(uid);
    if (result.length > 0) {
      return res.send(result);
    }
    return res.json({ message: "No post found" });
  } catch (err) {
    console.log("Somthing went wrong\n" + err);
    res.json({ message: "Error while Fetching post: " + err });
  }
};

exports.deleteFeed = async (req, res) => {
  try {
    const uid = req.session.userID;
    const pid = req.body.pid;
    const result = await Feed.deletePost(uid, pid);
    if (result > 0) {
      return res.status(200).json({ message: "Post deleted" });
    }
    return res.json({ message: "Post not found" });
  } catch (err) {
    console.log("Somthing went wrong\n" + err);
    res.json({ message: "Error while Deleting post: " + err });
  }
};

exports.postLike = async (req, res) => {
  try {
    const uid = req.session.userID;
    const pid = req.body.pid;
    const result = await Feed.likePost(uid, pid);
    if (result > 0) {
      return res.status(200).json({ message: "Post Liked" });
    }
    return res.json({ message: "You already liked the post" });
  } catch (err) {
    console.log("Somthing went wrong\n" + err);
    res.json({ message: "Error while Liking the post: " + err });
  }

};
