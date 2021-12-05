var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
var _db;

class Categories{
    categoriesColl =null;
    constructor(){
        this.initModel();
    }
    async initModel(){
        try {
        _db = await conn.getDB();
        this.categoriesColl = await _db.collection("categoria");
        }catch(ex){
        console.log(ex);
        process.exit(1);
        }
    }
    
//CONSULTA PARA ELIMINAR***************************************

    async deleteById(id) {
    let filter = { "_id": new ObjectID(id) };
    let result = await this.categoriesColl.deleteOne(filter);
    return result;
  }
/**************************************************************/

/***********************Actualizar Categoria***** */
async updCategoria(Descripcion_Cat, id) {
    // UPDATE SWOT set swotMeta = 'Nuevo Valor' where _id = 'aId';
    let filter = { _id: new ObjectID(id) };
    let result = await this.categoriesColl.updateOne(filter, {
        $set: { Descripcion_Cat: Descripcion_Cat },
    });
    return result;
}
/******Añadir categoria*********** */
async createNewCategory(descripcion_cat,correo_use)
  {
    try{
      let category ={
        descripcion_cat:descripcion_cat,
        correo_use:correo_use
      }
      console.log()
      let result = await this.categoriesColl.insertOne(category);
      return result;
    }catch(ex){
      throw(ex);
    }
  }
  
}



module.exports = Categories;