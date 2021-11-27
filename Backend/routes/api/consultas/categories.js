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


}

module.exports = Categories;