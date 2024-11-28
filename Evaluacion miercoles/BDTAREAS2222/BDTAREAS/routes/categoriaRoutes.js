const express = require ('express');
let CategoriaController = require ('../controllers/CategoriaController');
let router =express.Router();
router.get("/categoria", CategoriaController.obtenerCategoria);
router.get("/categoria/:id", CategoriaController.obtenerCategoriaId);
router.post("/categoria", CategoriaController.crearCategoria); 
router.put("/categoria/:id", CategoriaController.actualizarCategoria);
router.delete("/categoria/:id", CategoriaController.eliminarCategoria);


module.exports = router;