const EvaluacionService = require("../services/EvaluacionService");

class EvaluacionController {
    static  obtenerEvaluacion (req, res) {
        res.json({msj: EvaluacionService.obtenerT()});
    }
    static  crearEvaluacion (req, res) {
        res.json({msj: EvaluacionService.crearEvaluacion()});
    }
    static  actualizarEvaluacion (req, res) {
        res.json({msj: EvaluacionService.actualizarEvaluacion()});
    }
    static  eliminarEvaluacion (req, res) {
        res.json({msj: EvaluacionService.eliminarEvaluacion()});
    }
};

module.exports = EvaluacionController;