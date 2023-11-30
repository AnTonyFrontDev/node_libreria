//conexion a la base de datos
import  db  from "../database/db.js";

import { DataTypes } from 'sequelize';

const Model = db.define('titulo', {
    id_titulo: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_pub: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    avance: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    total_ventas: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    notas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_pub: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    contrato: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'titulos', // Asegúrate de que coincida con el nombre de la tabla en MySQL
    timestamps: false, // Puedes ajustar esto según tus necesidades
});

export default Model;