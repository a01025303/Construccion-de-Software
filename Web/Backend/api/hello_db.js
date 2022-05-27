// We need the mysql module for node js: https://github.com/mysqljs/mysql
// npm install mysql

import mysql from 'mysql'

// create the connection to database
const connection = mysql.createConnection(
    {
        host:'localhost', // Cambiar cuando cambie host
        user:'test', 
        password:'FutbolGol#1', 
        database: 'api_game_db'
    })

    // Función anónima que actúa si detecta un error. 
    // problema: muchos callbacks
connection.connect(error=>
    {
        if (error) console.log(error)
        console.log('Connected to mysql!')
    })

// rows contains rows returned by server
// fields contains extra meta data about results, if available
connection.query('select * from users', (error, rows, fields)=> 
    {
        // field tiene info sobre el query --> no tan necesaria 
        if(error) console.log(error)
        console.log(Object.keys(rows[0]))
        for (const r of rows)
        {
            // Funciona como un diccionario.
            console.log(Object.values(r))
        }
        console.log(rows)
        console.log(rows[0]['name'])
        //console.log(fields)
    })

    // Es importante cerrar las conexiones, sino se alenta todo
    // Cuando terminamos de usar conexión: 
connection.end(error=>
    {
        if(error) console.log(error)
        console.log("Connection closed successfully!")
    })