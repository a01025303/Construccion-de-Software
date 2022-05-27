// We need the mysql module for node js: https://github.com/mysqljs/mysql
// npm install mysql
// We also use the mysql2 module for its promise implementation: http://sidorares.github.io/node-mysql2/
// npm install mysql2

import mysql from 'mysql2/promise' // Usar implementación de promesas 

//Cambio principal: manejo de errores con promesas

let connection = null;

//Manejo de errores con try (no importa mucho qué pase), catch (no importa mucho qué pase), finally (siempre corre finally)
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