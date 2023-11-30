// Importar modelo
import ContactoModel from "../models/ContactoModel.js";

// Métodos para el CRUD de contacto

// Mostrar todos los registros de contacto
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactoModel.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un registro de contacto por ID
export const getContact = async (req, res) => {
    try {
        const contact = await ContactoModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(contact[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un registro de contacto
export const createContact = async (req, res) => {
    try {
        await ContactoModel.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un registro de contacto por ID
export const updateContact = async (req, res) => {
    try {
        await ContactoModel.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({
            message: "¡Registro actualizado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un registro de contacto por ID
export const deleteContact = async (req, res) => {
    try {
        await ContactoModel.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json("Contacto borrado");
    } catch (error) {
        res.json({ message: error.message });
    }
};
