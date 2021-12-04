var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
const bcrypt = require("bcryptjs");
var _db;
class Sec {
  secColl = null;
  constructor() {
    this.initModel();
  }
  async initModel() {
    try {
      _db = await conn.getDB();
      this.secColl = await _db.collection("usuario");
    } catch (ex) {
      console.log(ex);
      process.exit(1);
    }
  }
  async createNewUser( name, lastname, phone, email, password) {
    try {
      let user = {
        nombre_usu: name,
        apellido_usu: lastname,
        telefono_usu: phone,
        correo_usu: email,
        contrasena_usu: await bcrypt.hash(password, 10),
        lastlogin: null,
        lastpasswordchange: null,
        passwordexpires: new Date().getTime() + (90 * 24 * 60 * 60 * 1000), 
        oldpasswords: [],
        roles:["public"]
      }
      let result = await this.secColl.insertOne(user);
      //console.log(result);
      return result;
    } catch(ex) {
      console.log(ex);
      throw(ex);
    }
  }
/*
  async createNewUserK( email) {
    try {
      let user = {
        email: email,
        //password: await bcrypt.hash(password, 10),
        lastlogin: null,
        lastpasswordchange: null,
        passwordexpires: new Date().getTime() + (90 * 24 * 60 * 60 * 1000), 
        oldpasswords: [],
        roles:["public"]
      }
      let result = await this.secColl.insertOne(user);
      //console.log(result);
      return result;
    } catch(ex) {
      console.log(ex);
      throw(ex);
    }
  }
*/
  async getByEmail(email){
    const filter = {"correo_usu": email};
    return await this.secColl.findOne(filter);
  }

  async comparePassword (rawPassword, dbPassword){
    return await bcrypt.compare(rawPassword, dbPassword);
  }

  random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  async cambiarContra(email,pass) {
    try {

      let user = {
        password: await bcrypt.hash(pass, 10),
        passwordexpires: new Date().getTime() + (90 * 24 * 60 * 60 * 1000), 
      }
      let resultado = await this.secColl.updateOne({correo_usu:email},{$set:{contrasena_usu:user.password,passwordexpires:user.passwordexpires}});
      return resultado;
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }
}

module.exports = Sec;
