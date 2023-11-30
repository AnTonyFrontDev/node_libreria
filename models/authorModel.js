// En un archivo llamado "autorModel.js" por ejemplo

import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const AutorModel = db.define('autores', {
    id_autor: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cod_postal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'autores', // Asegúrate de que coincida con el nombre de la tabla en MySQL
    timestamps: false, // Puedes ajustar esto según tus necesidades
});

export default AutorModel;
