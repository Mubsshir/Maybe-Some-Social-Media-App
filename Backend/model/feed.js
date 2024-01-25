const { pool, initialize, sql } = require("../utils/database");

class Feed {
  constructor(userid, content, imageUrl) {
    this.userid = userid;
    this.content = content;
    this.imageUrl = imageUrl;
  }

  async save() {
    try {
      await initialize();
      const result = await pool
        .request()
        .input("u_id", this.userid)
        .input("content", this.content)
        .input("image_path", this.imageUrl)
        .output("isSaved", sql.Bit)
        .execute("USP_Save_Post");
      return result.output.isSaved;
    } catch (err) {
      console.log("Error while saving post:" + err);
      throw err;
    }
  }
  static async getPostsByUserID(uid) {
    await initialize();
    const result = await pool
      .request()
      .input("u_id", uid)
      .execute("USP_Get_PostByID");
    return result.recordset;
  }

  static async deletePost(uid, pid) {
    try {
      await initialize();
      const result = await pool
        .request()
        .input("uid", uid)
        .input("pid", pid)
        .output("isDeleted", sql.Bit)
        .execute("USP_Delete_Post");
      return result.output.isDeleted;
    } catch (err) {
      console.log("Error while Deleting post:" + err);
      throw err;
    }
  }
  static async getPosts() {
    await initialize();
    const result = await pool.request().execute("USP_Get_Posts");
    return result.recordset;
  }

  static async likePost(uid, pid) {
    try {
      await initialize();
      const result = await pool
        .request()
        .input("uid", uid)
        .input("pid", pid)
        .output("isLiked", sql.Bit)
        .execute("USP_Save_Post_Like");
      return result.output.isLiked;
    } catch (err) {
      console.log("Error while Deleting post:" + err);
      throw err;
    }
  }

  static async dislikePost(uid, pid) {
    try {
      await initialize();
      const result = await pool
        .request()
        .input("uid", uid)
        .input("pid", pid)
        .execute("USP_Delete_Post_Like");
    
      return result.recordset[0];
    } catch (err) {
      console.log("Error while Disliking post:" + err);
      throw err;
    }
  }
}

module.exports = Feed;
