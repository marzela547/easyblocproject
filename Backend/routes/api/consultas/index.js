var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategoriesDao = require('./categories');
var Categories = new CategoriesDao();


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

  router.get('/OneNota/:id', async (req, res, next)=>{
    try{
    const {id} = req.params;
    const OneNota = await notes.getOneNota(id);
      return res.status(200).json(OneNota);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });

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

router.post('/addCat', async(req, res, next) => {
    try {
        const {
            Descripcion_Cat,
                correo_usu,
            
        } = req.body;
        
        // validaciones
        const result = await Categories.addCat(Descripcion_Cat,correo_usu);
        console.log(result);
        res.status(200).json({ msg: "Agregado Satisfactoriamente" });
    } catch (ex) {
        console.log(ex);
        return res.status(500).json({ msg: "Error al procesar petición" });
    }
}); // /new


router.get('/allCate/:correo_usu', async (req, res, next)=>{
    try{
    const {correo_usu} = req.params;
    
      const allCat = await Categories.getAllCate(correo_usu);
      return res.status(200).json(allCat);
    }catch(ex){
      console.log(ex);
      return res.status(500).json({msg:"Error al procesar petición"});
    }
  });


//********consultar notas por categoria */
/*router.get('/bycategoria/:categoria', async(req, res, next) => {
            try {
                const { categoria } = req.params;

                const swots = await Swot.getBycategoria(type, req._id);
                return res.status(200).json(swots);
            } catch (ex) {
                console.log(ex);
                return res.status(500).json({ msg: "Error al procesar petición" });
            }

            //**********Consultar 1 dato**********************************

            router.get('/byid/:id', async(req, res, next) => {
                try {
                    const { id } = req.params;
                    const oneNoteEntry = await notes.getById(id);
                    return res.status(200).json(oneNoteEntry);
                    console.log('Hola papis');
                } catch (ex) {
                    console.log(ex);
                    return res.status(500).json({ msg: 'Error al procesar petición' });
                }
            });
            /********************************************************** */

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

            //**********Eliminar 1 dato**********************************

            router.delete('/delete/:id', async(req, res, next) => {
                try {
                    const { id } = req.params;
                    const result = await categories.deleteById(id);
                    console.log(result);
                    return res.status(200).json({ msg: 'Eliminado OK' });
                } catch (ex) {
                    console.log(ex);
                    return res.status(500).json({ msg: 'Error al procesar petición' });
                }
            });
            /********************************************************** */

            module.exports = router;