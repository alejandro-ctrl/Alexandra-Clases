const express = require ('express');
let TareaController = require ('../controllers/TareaController');
let router =express.Router();
router.get('/tareas', TareaController.obtenerTareas);
router.get('/tareas/:id' , TareaController.obtenerTareasId);
router.post('/tareas' , TareaController.crearTarea); 
router.put('/tareas/:id' , TareaController.actualizarTarea);
router.delete('/tareas/:id' , TareaController.eliminarTarea);
router.get("/traerTC",TareaController.traerTareaCategoria);

module.exports = router;