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
      console.log("Error while saving post:"+err);
      throw err;
    }
  }
  static async getPostsByUserID(uid){
    await initialize();
    const result=await pool.request()
      .input('u_id',uid)
      .execute('USP_Get_PostByID');
    return result.recordset;
  }
}

module.exports=Feed;