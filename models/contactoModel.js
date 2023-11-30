import db from "../database/db.js";
import { DataTypes } from 'sequelize';

const ContactoModel = db.define('contacto', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    asunto: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'contacto', // Asegúrate de que coincida con el nombre de la tabla en MySQL
    timestamps: false, // Puedes ajustar esto según tus necesidades
});

export default ContactoModel;
