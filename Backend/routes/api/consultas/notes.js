var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
var _db;
class Notes{
  notesColl =null;
  constructor(){
    this.initModel();
  }
  async initModel(){
    try {
      _db = await conn.getDB();
      this.notesColl = await _db.collection("nota");
    }catch(ex){
      console.log(ex);
      process.exit(1);
    }
  }
//***************************CONSULTAS****************************/
async getAllNotas(correo_usu){
  const filter = {correo_usu: correo_usu }
  let notas = await this.notesColl.find(filter);
  return notas.toArray();
}

  //CONSULTAR 1 NOTA***************************************
  async getById(id){
  const filter = { "_id": new ObjectID(id)};
  let buscarNota = await this.notesColl.findOne(filter);
  return buscarNota;
  }
//***********************************************************

  

}

module.exports = Notes;
