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

async deleteCategorie(descripcion_cat, correo_use) {
    let filter = {correo_use: correo_use, descripcion_cat: descripcion_cat};
    let result = await this.categoriesColl.deleteOne(filter);
    return result;
  }
/**************************************************************/

/***********************Actualizar Categoria***** */
async updCategoria(descripcion_cat, correo_use, actualizacion_cat) {
    // UPDATE SWOT set swotMeta = 'Nuevo Valor' where _id = 'aId';
    let filter = { correo_use: correo_use, descripcion_cat: descripcion_cat};
    let result = await this.categoriesColl.updateOne(filter, {
        $set: { descripcion_cat: actualizacion_cat},
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
  
  
  async getByTitlte(titulo,correo) {
    let filter = { "descripcion_cat": titulo,"correo_use": correo};
    let result = await this.categoriesColl.findOne(filter);
    return result;
}


}

module.exports = Categories;