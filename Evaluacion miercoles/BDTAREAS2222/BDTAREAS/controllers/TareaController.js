let TareaService = require("../services/TareaSevice");

class TareaController {
  static async obtenerTareas(req, res) {
    try {
      let tareas = await TareaService.obtenerT();
      res.json(tareas);
    } catch (e) {
      res.json(e);
    }
  }
  static async obtenerTareasId(req, res) {
    try {
      let resultado = await TareaService.obtenerTareasId(req.params.id);
      res.json(resultado);
    } catch (e) {
      console.log("Error tare no encontrada");
    }
  }
  static async crearTarea(req, res) {
    try {
      let rest = await TareaService.crearTarea(req.body);
      res.json(rest);
    } catch (e) {
      console.log("Error al crear tarea");
    }
  }
  static async actualizarTarea(req, res) {
    try {
      let respuesta = await TareaService.actualizarTarea(
        req.params.id,
        req.body
      );
      if (respuesta == 0) {
        return res.json({ mensaje: "Tarea no encontrada o no actualizada" });
      }
      return res.json({ mensaje: "Tarea actualizada" });
    } catch (e) {
      console.log("Error al actualizar la tarea");
      res.json({ mensaje: "Error al actualizar la tarea" });
    }
  }
  static async eliminarTarea(req, res) {
    try {
      let borrar = await TareaService.eliminarTarea(req.params.id);
      if (borrar == 0) {
        return res.json({ mensaje: "Tarea no encontrada o no actualizada" });
      }
      return res.json({ mensaje: "Tarea eliminada" });
    } catch (e) {
      console.log("Error al eliminar");
      res.json({ mensaje: "Error no se pudo borrar" });
    }
  }
  static async traerTareaCategoria(req, res) {
    try {
      let respTC = await TareaService.traerTareaCategoria();
      res.json(respTC);
    } catch (e) {
      //revisa error de rutas
      console.log(e);
    }
  }
}

module.exports = TareaController;
