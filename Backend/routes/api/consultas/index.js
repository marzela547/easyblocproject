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

router.delete('/delete/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const result = await categories.deleteById(id);
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
     router.put('/updCategoria/:id', async(req, res, next) => {
      try {
          const { id } = req.params;
          const { Descripcion_Cat } = req.body;
          const result = await categories.updCategoria(id, Descripcion_Cat);
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

/********Consultas Kevin***********************************************/
router.put('/updCategoria/:id', async(req, res, next) => {
  try {
      const { id } = req.params;
      const { Descripcion_Cat } = req.body;
      const result = await note.updCategoria(id, Descripcion_Cat);
      console.log(result);
      res.status(200).json({ msg: 'Modificado OK' });
  } catch (ex) {
      console.log(ex);
      return res.status(500).json({ msg: 'Error al procesar petición' });
  }
});
/******************************************************************** */
module.exports = router;
