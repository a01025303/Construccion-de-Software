// evita que aplicación se detenga, evitar ciclo infinito
const usersJSON = await fetch ('http://localhost:3000/api/users', {
     
    headers: {
        'Accept': 'application/json', // Esperar que mande un json
        'Content-Type' : 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'GET'
})

if(usersJSON.ok)
{
    const message = await usersJSON.json()
    console.log(message)
}