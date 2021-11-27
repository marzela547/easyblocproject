var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();
var CategoriesDao = require('./categories');
var Categories = new CategoriesDao();
var CategeroisDao = require('./categories');
var categories = new CategeroisDao();

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