import express from 'express'
import cors from 'cors'

import db from './database/db.js'

import Routes from './routes/routes.js'

const app = express()

app.use( cors())
app.use(express.json())
app.use('/libreria', Routes)
// app.use('/autores', Routes)

try {
    await db.authenticate()
    console.log('Conexion existosa a la DB')
}catch(error){
    console.log('El error de conexion es: ${error}')
}

app.get('/',(req, res)=> {
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log("Escuchando en el puerto 8000")
})