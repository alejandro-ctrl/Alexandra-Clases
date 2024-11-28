let DataTypes = require ('sequelize');
let sequelize = require ('../config/db');

let Categoria = sequelize.define('Categoria', {
    NOMBRE_CATEGORIA: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        timestamps : false,
        tableName: 'categoria'
    }
)

module.exports = Categoria;