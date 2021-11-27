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
            this.categoriesColl = await _db.collection('categoriax');
        } catch (ex) {
            console.log(ex);
            process.exit(1);
        }
    }

    async updCategoria(Descripcion_Cat, id) {
        // UPDATE SWOT set swotMeta = 'Nuevo Valor' where _id = 'aId';
        let filter = { _id: new ObjectID(id) };
        let result = await this.categoriesColl.updateOne(filter, {
            $set: { Descripcion_Cat: Descripcion_Cat },
        });
        return result;
    }
}

module.exports = Categories;