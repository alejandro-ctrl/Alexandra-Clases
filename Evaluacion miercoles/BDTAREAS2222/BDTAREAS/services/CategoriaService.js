let Categoria = require('../models/CategoriaModel')


class CategoriaService {
    static async obtenerT () {
        try {
            let Categorias = await Categoria.findAll();
            return Categorias;
        } catch (e) {
            console.log (e)
        }
    }
    static async obtenerCategoriaId (id) {
        try {
            let categoria = await Categoria.findByPk (id);
            if (!categoria) {
                console.log ("categoria no encontrada");
            }
            else {
                return categoria;
            }
        } catch (e) {
            console.log ("Error al obtener la categoria");
        }
    }
    static async crearCategoria (datos) {
        try {
            let categoreita = await Categoria.create(datos);
            return categoreita;
        } catch (e) {
            console.log ("Tarea no creada")
        }
    }
    static async actualizarCategoria (id, datos) {
        try {
            let [actualizar] = await Categoria.update(datos, {where:{id}});
            console.log (actualizar)
            if (actualizar == 0) {
                console.log ("No encontro la tarea a actualizar")
            }
            else {
                console.log("aeiou");
                return datos;
            }
        } catch (e) {
            console.log ("Error al actualizar")
        }
    }
    static async eliminarCategoria (id) {
        try {
            let borrar = await Categoria.destroy ({where : {id}});
            if (borrar == 0) {
                console.log ("No se encontro la tarea a borrar")
            }
            else {
                return borrar;
            }          
        } catch (e) {

        }
    }
}

module.exports =CategoriaService