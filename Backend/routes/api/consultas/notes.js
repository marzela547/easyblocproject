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



  //CONSULTAR 1 NOTA***************************************
  async getById(id){
  const filter = { "_id": new ObjectID(id)};
  let buscarNota = await this.notesColl.findOne(filter);
  return buscarNota;
  }
//***********************************************************

// agregar una nota*************************************************/
/*async addNew(descripcion_not, categoria_cat, titulo_not, imagenes_not, descripcion_not, correo_usu, id) {
  let newSwot = {
      descripcion_not,
      categoria_cat,
      titulo_not,
      imagenes_not,
      descripcion_not,
      correo_usu,

      nota_id: new ObjectID(id)
  }
  let result = await this.swotColl.insertOne(newSwot);
  return result;
}
  //consultar las notas por categoria******************
  async getByType(categotia, _id) {
    // SELECT * from nota where categoria = ?;
    const filter = { "categoria": categoria, "_id": new ObjectID(_id) };
    let cursor = await this.swotColl.find(filter);
    return cursor.toArray();
}*/
}

module.exports = Notes;
