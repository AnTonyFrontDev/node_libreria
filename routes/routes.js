import express from 'express'
import {getAllBooks, getBooks, createBooks, updateBooks, deleteBooks} from '../controller/bookController.js'
import {getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor} from '../controller/authorController.js'
import {getAllContacts, getContact, createContact, updateContact, deleteContact } from '../controller/contactoController.js'
const Router = express.Router()

Router.get('/libro/', getAllBooks)
Router.get('/libro/:id', getBooks)
Router.post('/libro/', createBooks)
Router.put('/libro/:id', updateBooks)
Router.delete('/libro/:id', deleteBooks)

Router.get('/author/', getAllAuthors)
Router.get('/author/:id', getAuthor)
Router.post('/author/', createAuthor)
Router.put('/author/:id', updateAuthor)
Router.delete('/author/:id', deleteAuthor)

Router.get('/contacto/', getAllContacts)
Router.get('/contacto/:id', getContact)
Router.post('/contacto/', createContact)
Router.put('/contacto/:id', updateContact )
Router.delete('/contacto/:id', deleteContact )

export default Router 