var conn = require('../../../utils/conexion');
var ObjectID = require('mongodb').ObjectId;
var _db;
class Notes {
    notesColl = null;
    constructor() {
        this.initModel();
    }
    async initModel() {
            try {
                _db = await conn.getDB();
                this.notesColl = await _db.collection("nota");
            } catch (ex) {
                console.log(ex);
                process.exit(1);
            }
        }
        // agregar una nota*************************************************/
    /*async addNew(titulo_Not, categoria_Not, descripcion_Not, imagenes_Not,correo_usu) {
        let newNota = {
            titulo_Not,
            categoria_Not,
            descripcion_Not,
            imagenes_Nota:["img1","img2","img3"],
            correo_usu,
        }
        let result = await this.notesColl.insertOne(newNota);
        return result;
    }*/


    async addNew(titulo_Not, categoria_Not, descripcion_Not, correo_usu) {
        let newNota = {
            titulo_Not,
            categoria_Not,
            descripcion_Not,
            correo_usu,
        }
        let result = await this.notesColl.insertOne(newNota);
        return result;
    }


    async getAllNotas(correo_usu){
        const filter = {correo_usu: correo_usu }
        let notas = await this.notesColl.find(filter);
        return notas.toArray();
      }

    //***************************CONSULTAS****************************/



    //CONSULTAR 1 NOTA***************************************
    async getById(id) {
            const filter = { "_id": new ObjectID(id) };
            let buscarNota = await this.notesColl.findOne(filter);
            return buscarNota;
        }
        //***********************************************************

    //consultar las notas por categoria******************
    async getByType(categotia, _id) {
        // SELECT * from nota where categoria = ?;
        const filter = { "categoria": categoria, "_id": new ObjectID(_id) };
        let cursor = await this.swotColl.find(filter);
        return cursor.toArray();
    }


}

module.exports = Notes;