let Tarea = require("../models/TareaModel");
let Categoria = require("../models/CategoriaModel");

class TareaService {
  static async obtenerT() {
    try {
      let tarea = await Tarea.findAll();
      return tarea;
    } catch (e) {
      console.log(e);
    }
  }
  static async obtenerTareasId(id) {
    try {
      let tarea = await Tarea.findByPk(id);
      if (!tarea) {
        console.log("Tarea no encontrada");
      } else {
        return tarea;
      }
    } catch (e) {
      console.log("Error al obtener la tarea");
    }
  }
  static async crearTarea(datos) {
    try {
      let tareita = await Tarea.create(datos);
      return tareita;
    } catch (e) {
      console.log("Tarea no creada");
    }
  }
  static async actualizarTarea(id, data) {
    try {
      let [actualizar] = await Tarea.update(data, { where: { id } });
      console.log(actualizar);
      if (actualizar == 0) {
        console.log("No encontro la tarea a actualizar");
      } else {
        console.log("aaaaaaaaaaaaaaaaaaaaaa");
        return data;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarTarea(id) {
    try {
      let borrar = await Tarea.destroy({ where: { id } });
      if (borrar == 0) {
        console.log("No se encontro la tarea a borrar");
      } else {
        return borrar;
      }
    } catch (e) {}
  }
  static async traerTareaCategoria() {
    try {
      let rtarea = await Tarea.findAll({
        attributes: ["titulo"],
        include: {
          model: Categoria,
          attributes: ["id", "nombre"],
        },
      });

      return rtarea;
    } catch (e) {
      console.log("Error al obtener tarea", e);
    }
  }
}

module.exports = TareaService;
