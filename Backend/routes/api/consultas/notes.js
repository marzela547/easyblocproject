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

    async addNew(titulo_Not, categoria_Not, descripcion_Not,estilos_not, correo_usu, imagen_not) {
        let newNota = {
            titulo_Not,
            categoria_Not,
            descripcion_Not,
            estilos_not,
            correo_usu,
            imagen_not
        }
        let result = await this.notesColl.insertOne(newNota);
        return result;
    }


    async updNote(id,titulo_Not,descripcion_Not,categoria_Not,estilos_not) {
      try {
        let result = await this.notesColl.updateOne({ "_id": new ObjectID(id)},{$set:{
            titulo_Not:titulo_Not,
            descripcion_Not:descripcion_Not,
            categoria_Not:categoria_Not,
            estilos_not:estilos_not
                                                              }});
        console.log(result)
        return result;
      } catch(ex) {
        console.log(ex);
        throw(ex);
      }
    }

    async getAllNotas(correo_usu){
        const filter = {correo_usu: correo_usu }
        let notas = await this.notesColl.find(filter);
        let documents = await notas.toArray();
        return {documents}
      }

    //***************************CONSULTAS****************************/

  //CONSULTAR 1 NOTA***************************************
  async getById(id){
  const filter = { "_id": new ObjectID(id)};
  let buscarNota = await this.notesColl.findOne(filter);
  return buscarNota;
  }
//***********************************************************
  async deleteOneNote(id){

    let filter = {"_id": new ObjectID(id)};
    let result = await this.notesColl.deleteOne(filter);
    return result;

  }

}

module.exports = Notes;
