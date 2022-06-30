"use strict"

import express from 'express'
import fs from 'fs' // Leer y escribir archivos del servidor
import mysql from 'mysql2/promise'

const app = express() // objeto express
const port = 3000 // puerto --> comunica con servidor

//middle ware : procesar cosas 
app.use(express.json()) //procesar archivo json
// json: representar datos, enviar datos a través de web

//Exponer archivos a la red
app.use('/css', express.static('./css')) // usar archivos de la carpeta css 

app.use('/js', express.static('./js')) // usar archivos de la carpeta js

// Protocolo http

// 4 operaciones : GET, 

// Regresar página web q tenemos cargada 
// `/` = endpoint (dirección a la que hago solicitud)

app.get('/', (req, res)=>
{
    // Leer archivo
    fs.readFile('./html/helloWorld.html', 'utf8', 
    // callback --> medio evento
    // Asincrónico, después de leer archivo
    (err, html)=>
    {
        if(err)
        {
            res.status(500).send('There was an error: ' + err)
            return
        }
        console.log("Sending page ...")
        res.send(html)
    })
})

// lo que tiene / es un endpoint
// api recibe solicitud (req) y regresa respuesta (res)
app.get('/api/hello', (req, res) => 
{
    const {name} = req.query
    console.log(req.headers)
    res.send(`Hello ${name}`)
    res.send({message: `Hello ${name}`})
})

app.get('/api/users', async (req, res) => // Usar async cada vez que usemos await
{
    let connection = null;
    try
    {
        connection = await mysql.createConnection( // Conexión con promesa
        {
            // Asíncrono
            host:'localhost', 
            user:'test', 
            password:'FutbolGol#1', 
            database: 'api_game_db'
        })
        
        console.log("Connection stablished!")

        //Query
        const [rows, fields] = await connection.execute('select * from users');
        
        console.log(Object.keys(rows[0]))

        for (const r of rows)
        {
            console.log(Object.values(r))
        }
        res.json(rows)
        console.log(rows)
    }
    //Siempre se manejan errores dentro del catch
    catch(error)
    {
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
})

// Escuchar al puerto
app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})