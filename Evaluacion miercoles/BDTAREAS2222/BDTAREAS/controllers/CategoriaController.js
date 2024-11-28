let CategoriaService = require ('../services/CategoriaService');


class CategoriaController {
    static async obtenerCategoria ( req, res ) {
        try {
            let tareas = await CategoriaService.obtenerT();
            res.json(tareas);
        } catch (e) {
            res.json(e);
        }
    }
    static async obtenerCategoriaId  (req, res) {
        try {
            let resultado = await CategoriaService.obtenerCategoriaId(req.params.id);
            res.json(resultado);
        } catch (e) {
            console.log ("Error categoria no encontrada");
        }
    }
    static async crearCategoria (req, res) {
        try {
            let rest = await CategoriaService.crearCategoria(req.body);
            res.json(rest);
        } catch (e) {
            console.log ("Error al crear categoria")
        }

    }
    static async actualizarCategoria (req, res) {
        try {
            let respuesta = await CategoriaService.actualizarCategoria(
              req.params.id,
              req.body
            );
            if (respuesta == 0) { 
                return res.json ({mensaje: "categoria no encontrada o no actualizada"});
            }
                return res.json({mensaje: "categoria actualizada"})
        } catch (e) {
            console.log ("Error al actualizar la categoria");
            res.json ({mensaje:"Error al actualizar la categoria"});
        }
    }
    static async eliminarCategoria (req, res) {
        try {
            let borrar = await CategoriaService.eliminarCategoria(req.params.id);
            if (borrar == 0) { 
                return res.json ({mensaje: "Categoria no encontrada o no actualizada"});
            }
                return res.json({mensaje: "Categoria eliminada"})
        } catch (e) {
            console.log ("Error al eliminar");
            res.json ({mensaje: "Error no se pudo borrar"})
        }
    }
}

module.exports = CategoriaController;