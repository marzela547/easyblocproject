var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
var _db;

class Categories {
    categoriesColl = null;
    constructor() {
        this.initModel();
    }
    async initModel() {
            try {
                _db = await conn.getDB();
                this.categoriesColl = await _db.collection('categoria');
            } catch (ex) {
                console.log(ex);
                process.exit(1);
            }
        }
        /**********CONSULTA PARA MODIFICAR UNA CATEGOIRA**************/
    async updCategoria(id, _Descripcion_Cat) {
            // UPDATE SWOT set swotMeta = 'Nuevo Valor' where _id = 'aId';
            const filter = { _id: ObjectID(id) };
            let result = await this.categoriesColl.updateOne(filter, {
                $set: { Descripcion_Cat: _Descripcion_Cat },
            });
            return result;
        }
        /*************************************************************** */
        //CONSULTA PARA ELIMINAR***************************************

    async deleteById(id) {
            let filter = { _id: new ObjectID(id) };
            let result = await this.categoriesColl.deleteOne(filter);
            return result;
        }
        /**************************************************************/

        /*******************AGREGAR CATEGORIA******************** */
        async addCat( Descripcion_Cat,correo_usu) {
            let newCat = {
                Descripcion_Cat,
                correo_usu,

            }
            let result = await this.categoriesColl.insertOne(newCat);
            return result;
        }

        async getAllCate(correo_usu){/*
            const filter = {correo_usu: correo_usu }
            let categorias = await this.categoriesColl.find(filter);

            let documents = await categorias.toArray();
            return {
                categorias
            };
        
       
            const filter = {correo_usu: correo_usu }
            let cursor = await this.categoriesColl.find(filter);
            let documents = await cursor.toArray();
            return { documents}
       
         const filter = { swotDesc: RegExp(textToSearch, 'g'), "user_id": new ObjectID(userId)};
    //console.log(filter);
    /*const options = {
      projection: {},
      limit: itemsPerPage,
      skip: (itemsPerPage * (page - 1))
    };*/
    //let cursor = await this.swotColl.find(filter, options);
        const filter = {correo_usu: correo_usu }
        let cursor =  await this.categoriesColl.find(filter);
        let documents = await cursor.toArray();
        return {

        documents,
         
        }
        
        
         }


}

module.exports = Categories;