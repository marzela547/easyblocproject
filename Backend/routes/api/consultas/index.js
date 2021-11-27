var express = require('express');
var router = express.Router();
var NotesDao = require('./notes');
var notes = new NotesDao();


//**********Consultar 1 dato**********************************

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




module.exports = router;
