const { pool, initialize ,sql} = require("../utils/database")

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async fetchAllUser() {
    await initialize();
    const result = await pool.request().execute('USP_GET_Users');
    return result.recordset;
  }
  async save() {
    await initialize();
    let result;
    try {
      result = await pool.request()
        .input("username", this.name)
        .input("pass", this.password)
        .execute("USP_Save_User");
      return result.recordset[0];
    } catch (err) {
      console.log(`Error while saving user: ${err}`);
      return null;
    }
  }

  static async FindUserCred(username){
    await initialize();
    let result;
    try{
      result=await pool.request()
        .input('username',username)
        .output('pass',sql.NVarChar(100))
        .execute('USP_Authenticate_USER');
      return result.output.pass;
    }catch(err){
      console.log("Error while authenticating the user: ",+err);
      return null;
    }
  }
}

module.exports=User;