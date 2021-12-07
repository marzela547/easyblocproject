var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategeroisDao = require('./categories');
var categories = new CategeroisDao();


//**********Consultar 1 nota**********************************

router.get('/byid/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const oneNoteEntry = await notes.getById(id);
    return res.status(200).json(oneNoteEntry);
    console.log("Hola papis");
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
}); 
/********************************************************** */

//**********Eliminar 1 Categoria**********************************

router.delete('/deleteCategorie/:descripcion_cat/:correo_use', async (req, res, next)=>{
  try {
    const {descripcion_cat, correo_use} = req.params;
    const result = await categories.deleteCategorie(descripcion_cat, correo_use);
    console.log(result);
    return res.status(200).json({"msg":"Eliminado OK"});
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
});
/********************************************************** */
//agregar nueva nota*********
/*router.post('/new', async(req, res, next) => {
  try {
    const {
      descripcion_not,
      categoria_cat,
      titulo_not,
      imagenes_not,
      correo_usu
    } = req.body;
    const swotMetaArray = swotMeta.split('|');
    // validaciones
    const result = await notes.addNew(descripcion_not, categoria_cat, titulo_not, imagenes_not, correo_usu, req.nota._id);
    console.log(result);
    res.status(200).json({ msg: "Agregado Satisfactoriamente" });
  } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: "Error al procesar petición" });
    }}); // /new

     /********Consulta MODIFICAR UNA CATEGORIA***********************************************/
router.put('/updCategorie', async(req, res, next) => {
      try {
          //const { id } = req.params;
          const { descripcion_cat, correo_usu, actualizacion_cat } = req.body;
          const result = await categories.updCategoria(descripcion_cat, correo_usu, actualizacion_cat);
          console.log(result);
          res.status(200).json({ msg: 'Modificado OK' });
      } catch (ex) {
          console.log(ex);
          return res.status(500).json({ msg: 'Error al procesar petición' });
      }
  });
  /******************************************************************** */
  //********consultar notas por categoria */
router.get('/bycategoria/:categoria', async(req, res, next) => {
  try {
      const { categoria } = req.params;
      const swots = await Swot.getBycategoria(type, req._id);
                return res.status(200).json(swots);
            } catch (ex) {
                console.log(ex);
                return res.status(500).json({ msg: "Error al procesar petición" });
            }});

router.post('/comparar', async (req, res, next) => {
  try {
    console="llego"
    const {correo,acontrasena} = req.body;
    let userLogged = await SecModel.getByEmail(correo);
    const isPswdOk = await SecModel.comparePassword(acontrasena, userLogged.contrasena_usu);
    if (isPswdOk)
    {
      res.status(200).json({"msg":"correct"});
    }else{
      res.status(200).json({"msg":"error"});
    }
  } catch (ex) {
    res.status(500).json({ "msg": "Error" });
  }
});

router.post('/ccontrasena', async (req, res, next) => {
  try {
    
    const {correo,ncontrasena} = req.body;
    let usu = await SecModel.cambiarContra(correo, ncontrasena);
    if (usu)
    {
      res.status(200).json({"msg":1});
    }else{
      res.status(200).json({"msg":0});
    }
  } catch (e) {
    res.status(500).json({ "msg": "Error al editar la contraseña" });
  }
});
/**************Nueva Categoria******************** */
router.post('/newcategory', async (req, res, next) => {
  try {
    const {descripcion, correo} = req.body;
    
    let exists = await categories.getByTitlte(descripcion, correo);
    if(exists){
        res.status(200).json({"msg":1});
    }else{
        let cateAdded = await categories.createNewCategory(descripcion, correo);
        console.log(cateAdded);
        res.status(200).json({"msg":0});
    }
    
  } catch (ex) {
    res.status(500).json({ "msg": "Error" });
    console.log("ERRRRRRROOOOOOORRRR")
  }
});

router.put('/updatenote', async (req, res, next) => {
  try {
    const {id,titulo,descripcion,categoria,usuario} = req.body;
    let imagenes = ["img1","img2","img3"]
    let noteupdate = await notes.changeNote(id,titulo,descripcion, imagenes,categoria,usuario);
    delete noteupdate;
    res.status(200).json({"msg":"Nota Editada Satisfactoriamente"});
  } catch (ex) {
    res.status(500).json({ "msg": "Error" });
  }
});

/********Traer todas las notas */
router.get('/getAllNotes', async(req, res, next) =>{
  
});

router.get('/allCate/:correo_usu', async (req, res, next)=>{
    try{
    const {correo_usu} = req.params;

      const allCat = await categories.getAllCate(correo_usu);
      return res.status(200).json(allCat);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });

module.exports = router;
