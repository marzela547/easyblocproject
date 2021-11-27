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
  //A PARTIR DE AQUÍ EMPIEZAN A COLOCAR SU CÓDIGO
 /* async getAll(id){
    const filter = {"user_id": new ObjectID(id)}
    let swots = await this.swotColl.find(filter);
    return swots.toArray();
  
  }

  async getWithFilterAndProjection(filter, projection) {
    // SELECT {projection} from SWOT where {filter};
    // SELECT _id, swotRelevance from SWOT;
    let p = {
      "projection": projection
    }
    let swots = await this.swotColl.find(filter, p );
    return swots.toArray();
  }

  async updateRelevanceRandom(id) {
    const filter = {"_id": new ObjectID(id)};
    const updateAction = {"$set": {swotRelevance: Math.round(Math.random()*100)/100}};
    let result = await this.swotColl.updateOne(filter, updateAction);
    return result;
  }

  async getById(id){
    const filter = { "_id": new ObjectID(id)};
    let swotDocument = await this.swotColl.findOne(filter);
    return swotDocument;
  }

  async getByType(type, userId){
    // SELECT * from SWOT where swotType = ?;
    const filter = {"swotType": type, "user_id": new ObjectID(userId)};
    let cursor = await this.swotColl.find(filter);
    return cursor.toArray();
  }

  async getByMetaKey(key, userId){
    const filter = {"swotMeta":key, "user_id": new ObjectID(userId)};
    let cursor = await this.swotColl.find(filter);
    return cursor.toArray();
  }

  async getByFacet(textToSearch, page, itemsPerPage, userId){
    const filter = { swotDesc:  RegExp(textToSearch,'g'), "user_id": new ObjectID(userId)};
    console.log(filter);
    /*const options = {
      projection: {},
      limit: itemsPerPage,
      skip: (itemsPerPage * (page - 1))
    };*/
    //let cursor = await this.swotColl.find(filter, options);
    /*let cursor = await this.swotColl.find(filter);
    let docsMatched = await cursor.count();
    cursor.skip((itemsPerPage * (page - 1)));
    cursor.limit(itemsPerPage);
    let documents = await cursor.toArray();
    return {
      docsMatched,
      documents,
      page,
      itemsPerPage
    }
    // SELECT column1, column2 from TABLE where column1 like '%SomeText%';
  }

  async getAggregatedData(userId){
    //Se va a agregar
    // select type, count(*) from SWOTS where userId=? group by type;
    //El PipeLine es un conjunto de la consulta, es un arreglo, 1 paso= match, 2 paso = group, 3 paso = sort
    const PipeLine=[
      {
        //hacer un filtro
        '$math':{
          'user_id': new ObjectID(userId)
        }
      },
      {
        //agrupa los datos
        '$group':{
          '_id': '$swotType',
          'swotTypeCount':{
            '$sum': 1
          }
        }
      },
      {
        //ordena los datos
        '$sort':{
          '_id':1
        }
      }
    ]

    const cursor = this.swotColl.aggregate(PipeLine);
    return await cursor.toArray();
  }

  /*
    SWOT, SWOTMETA   {swotid 1:n}
    SELECT * from SWOT INNER JOIN SWOTMETA on SWOT.swotid = SWOTMETA.swotid
    where SWOTMETA.swotKey = ?;
  */
 

  /*async addNew(swotType, swotDesc, swotMetaArray, id){
    let newSwot = {
      swotType,
      swotDesc,
      swotMeta: swotMetaArray,
      swotDate: new Date().getTime(),
      user_id: new ObjectID(id) 
    }
    let result = await this.swotColl.insertOne(newSwot);
    return result;
  }
  async addMetaToSwot(swotMetaKey, id) {
    // UPDATE SWOT set swotMeta = 'Nuevo Valor' where _id = 'aId';
    let filter = {"_id": new ObjectID(id)};
    let updateJson = {
      "$push" : {"swotMeta": swotMetaKey}
    };
    let result = await this.swotColl.updateOne(filter, updateJson);
    return result;
  }

  async deleteById(id) {
    // DELETE FROM SWOT where _id = 'aId';
    let filter = { "_id": new ObjectID(id) };
    let result = await this.swotColl.deleteOne(filter);
    return result;
  }
*/

}

module.exports = Notes;