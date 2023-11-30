// Importar modelo
import AutorModel from "../models/authorModel.js";

// Métodos para el CRUD de autores

// Mostrar todos los registros de autores
export const getAllAuthors = async (req, res) => {
    try {
        const authors = await AutorModel.findAll();
        res.status(200).json(authors);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un registro de autor por ID
export const getAuthor = async (req, res) => {
    try {
        const author = await AutorModel.findAll({
            where: {
                id_autor: req.params.id,
            },
        });
        res.status(200).json(author[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un registro de autor
export const createAuthor = async (req, res) => {
    try {
        await AutorModel.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un registro de autor por ID
export const updateAuthor = async (req, res) => {
    try {
        await AutorModel.update(req.body, {
            where: { id_autor: req.params.id },
        });
        res.json({
            message: "¡Registro actualizado correctamente!",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un registro de autor por ID
export const deleteAuthor = async (req, res) => {
    try {
        await AutorModel.destroy({
            where: { id_autor: req.params.id },
        });
        res.status(200).json("Autor borrado");
    } catch (error) {
        res.json({ message: error.message });
    }
};
