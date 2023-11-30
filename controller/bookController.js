//impotar modelo 
import Model from "../models/Model.js";

//** Metdos  para  el CRUD **/

// Mostrar todos los registros 
export const getAllBooks = async (req, res) => {
    try {
        const Books = await Model.findAll()
        res.status(200).json(Books)
    }catch (error) {
        res.json({message: error.message})
    }
}
//Mostrar un registro 
export const getBooks = async (req, res) => {
    try {
        const Books = await Model.findAll({
            where:{
                id_titulo: req.params.id },
        })
        res.status(200).json(Books[0])
    }catch (error){
        res.json( {message:error.message } )
    }
} 
//Crear un registro 
export const createBooks = async (req, res) => {
    try{
        Model.create(req.body)
        res.json({
            "message":"!Registro create correctamente!"
        })
    }catch(error){
        res.json( {message: error.message} )
    }
}
//Actualizar un registro 
export const updateBooks = async (req, res) =>{
    try {
        const upBook = await Model.update(req.body, {
            where: {id_titulo: req.params.id}
        })
        res.json({
            "message":"!Registro actualizar correctamente!"
        })
    }catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un registro 
export const deleteBooks = async (req, res) => {
    try {
        const DeleteBook = await Model.destroy({
            where: {id_titulo: req.params.id}
        })
            res.status(200).json("Archivo borrado")
    } catch (error) {
        res.json( {message: error.message} )
    }
}