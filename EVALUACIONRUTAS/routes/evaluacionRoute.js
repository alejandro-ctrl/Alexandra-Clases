const express = require ('express');
let EvaluacionController = require ('../controllers/evaluacionController');
let router = express.Router ();
router.get('/evaluacion' , EvaluacionController.obtenerEvaluacion);
router.post('/evaluacion' , EvaluacionController.crearEvaluacion);
router.put('/evaluacion' , EvaluacionController.actualizarEvaluacion);
router.delete('/evaluacion' , EvaluacionController.eliminarEvaluacion);


module.exports = router;