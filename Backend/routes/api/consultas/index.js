var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategeroisDao = require('./categories');
var categories = new CategeroisDao();


//agregar nueva nota*********
router.post('/new', async(req, res, next) => {
    try {
        const {
            titulo_Not,
            categoria_Not,
            descripcion_Not,
            estilos_not,
            correo_usu
            
        } = req.body;
        
        // validaciones
        const result = await notes.addNew(titulo_Not, categoria_Not, descripcion_Not,estilos_not,correo_usu);
        console.log(result);
        res.status(200).json({ msg: "Agregado Satisfactoriamente" });
    } catch (ex) {
        console.log(ex);
        return res.status(500).json({ msg: "Error al procesar petición" });
    }
}); // /new

router.delete('/deleteNote/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const result = await notes.deleteOneNote(id);
    console.log(result);
    return res.status(200).json({"msg":"Eliminado OK"});
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
})

router.get('/allNotas', async (req, res, next)=>{
    try{
    const {correo_usu} = req.body;
    
      const allNotas = await notes.getAllNotas(correo_usu);
      return res.status(200).json(allNotas);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });

router.get('/byid/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const oneNoteEntry = await notes.getById(id);
    return res.status(200).json(oneNoteEntry);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
}); 
/********************************************************** */
router.get('/getOneCategorie/:descripcion_cat/:correo_usu', async(req, res, next)=>{
  try {
    const {descripcion_cat,correo_usu} = req.params;
    const oneCategorieEntry = await categories.getByTitlte(descripcion_cat, correo_usu);
    return res.status(200).json(oneCategorieEntry);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
})
/************************* */
router.get('/OneNota/:id', async(req, res, next)=>{
  try {
    const {id} = req.params;
    const oneNoteEntry = await notes.getById(id);
    return res.status(200).json(oneNoteEntry);
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: "Error al procesar petición" });
  }
})
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
router.get('/allNotas/:correo_usu', async (req, res, next)=>{
  try{
    const {correo_usu} = req.params;
    const allNotas = await notes.getAllNotas(correo_usu);
    return res.status(200).json(allNotas);
  }catch(ex){
    console.log(ex);
    return res.status(500).json({msg:"Error al procesar petición"});
  }
});

/********************************************************** */

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

  router.put('/updNota/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const {
            titulo_Not,
            categoria_Not,
            descripcion_Not,
            estilos_not
            
        } = req.body;
        const result = await notes.updNote(id,titulo_Not,descripcion_Not,categoria_Not,estilos_not);
        console.log(result);
        res.status(200).json({ msg: 'Modificado OK' });
    } catch (ex) {
        console.log(ex);
        return res.status(500).json({ msg: 'Error al procesar petición' });
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
