var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategeroisDao = require('./categories');
var categories = new CategeroisDao();


//**********Consultar 1 dato**********************************

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

//**********Eliminar 1 dato**********************************

router.delete('/delete/:titulo/:correo', async (req, res, next)=>{
  try {
    const {titulo,correo} = req.params;
    const result = await categories.deleteById(titulo,correo);
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
