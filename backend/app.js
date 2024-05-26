const express = require('express')                  //Importa lib para servidor 
const cors = require('cors');                       //Permite al servidor manejar solicitudes de diferentes serv o port
const {db} = require('./db/db');                    //Importa db 
const {readdirSync} = require('fs')                 // lee contenido de un directorio

const app = express()

require('dotenv').config()                          //dotenv=uso variable estado, config()= lee archivo .env

const PORT = process.env.PORT                       //asigna el puerto asignado en .env

//Software intermedio, funciones con acceso a request y response

app.use(express.json())                             //Analiza request con JSON, detecta header
app.use(cors())                                     //Permitir request depende de la config cors

app.get('/',(req,res) => {                          //Envia en la respuesta con GET en /
    res.send('Hell')
})

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))  //Carga dinámica de rutas



const server = () => {                              //funcion del servidor
    db()
    app.listen(PORT, () => {                        //app del servidor escucha por PORT
        console.log('Listening to port:',PORT)
    })
}

server()