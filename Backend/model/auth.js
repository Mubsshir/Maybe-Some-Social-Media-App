const { pool, initialize, sql } = require("../utils/database");

class User {
  constructor(firstName,lastName,username, email,dob, password) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.dob=dob;
  }

  static async fetchAllUser() {
    await initialize();
    const result = await pool.request().execute("USP_GET_Users");
    return result.recordset;
  }
  async save() {
    await initialize();
    let result;
    try {
      result = await pool
        .request()
        .input("firstName", this.firstName)
        .input("lastName", this.lastName)
        .input("username", this.username)
        .input("dob", this.dob)
        .input("email", this.email)
        .input("pass", this.password)
        .execute("USP_Save_User");
      return result.recordset[0];
    } catch (err) {
      console.log(`Error while saving user: ${err}`);
      return null;
    }
  }

  static async FindUserCred(username) {
    await initialize();
    let result;
    try {
      result = await pool
        .request()
        .input("username", username)
        .output("pass", sql.NVarChar(100))
        .output("uid", sql.Int)
        .execute("USP_Authenticate_USER");
      return { pass: result.output.pass, uid: result.output.uid };
    } catch (err) {
      console.log("Error while authenticating the user: ", +err);
      return null;
    }
  }
  static async getProfile(uid) {
    await initialize();
    let result;
    try {
      result = await pool
        .request()
        .input("uid", uid)
        .execute("USP_GET_User_Details");
      return result.recordset;
    } catch (err) {
      console.log("Error while authenticating the user: ", +err);
      return null;
    }
  }
  static async saveProfilePic(uid,img) {
    await initialize();
    let result;
    try {
      result = await pool
        .request()
        .input("uid", uid)
        .input("img", img)
        .execute("USP_Save_ProfilePicture");
      return result.recordsets[0];
    } catch (err) {
      console.log("Error while authenticating the user: ", +err);
      return null;
    }
  }
}

module.exports = User;
