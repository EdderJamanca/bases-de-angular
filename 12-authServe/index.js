const { response } = require('express');
const express=require('express'); //importamos a express
const cors= require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// console.log(process.env);

//Crear el servidor/aplicación de express
const app= express();

//bASE de dATOS
dbConnection();

//Directorio publico
app.use(express.static('public'));

//CORS
app.use( cors());

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

//rutas
app.use('/api/auth',require('./routes/auth'));


app.listen(4000,()=>{
    console.log(`Servidor corriendo en puerto ${4000}`);
})