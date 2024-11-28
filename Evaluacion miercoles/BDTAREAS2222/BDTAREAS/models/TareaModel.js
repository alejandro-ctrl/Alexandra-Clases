let DataTypes = require ('sequelize');
let sequelize = require('../config/db');
let categoria = require('./CategoriaModel');

let Tarea = sequelize.define('Tareas', {
    
    TITULO: {
        type : DataTypes.STRING,
        allowNull: false
    },
    DESCRIPCION: {
        type : DataTypes.STRING,
        allowNull : false
    },
    CATEGORIA_ID: {
        type: DataTypes.INTEGER,
        references: {
            model: categoria,
            key:'id'
        }
    }
},
    {
        timestamps : true,
        tableName: 'tareas'
    }
)
Tarea.belongsTo(categoria,{foreignKey:'CATEGORIA_ID'});

module.exports = Tarea;