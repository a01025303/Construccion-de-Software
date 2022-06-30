/* Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, 
obtener el vector unitario, y multiplicar por un escalar. */

class Vector 
{
    //Constructor
    constructor(x, y, z)
    {
        this.x = x
        this.y = y
        this.z = z
    }

    //Métodos
    sum(vector)
    {
        let xSum = this.x + vector.x
        let ySum = this.y + vector.y
        let zSum = this.z + vector.z

        let sumVect = new Vector(xSum, ySum, zSum)
        return sumVect

    }

    subtraction(vector)
    {
        let xSub = this.x - vector.x
        let ySub = this.y - vector.y
        let zSub = this.z - vector.z

        let subVect = new Vector(xSub, ySub, zSub)
        return subVect
    }

    magnitude()
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
    }

    unitVector()
    {
        let xUnit = this.x / this.magnitude()
        let yUnit = this.y / this.magnitude()
        let zUnit = this.z / this.magnitude()

        let unitVect = new Vector(xUnit, yUnit, zUnit)
        return unitVect
    }

    scalarMult(scalar)
    {
        let xMult = this.x * scalar
        let yMult = this.y * scalar
        let zMult = this.z * scalar

        let multVect = new Vector(xMult, yMult, zMult)
        return multVect

    }

    dotProduct(vector)
    {
        let xMult = this.x * vector.x
        let yMult = this.y * vector.y
        let zMult = this.z * vector.z

        return xMult+yMult+zMult
    }
}

//Pruebas de la Clase
let myVector = new Vector(3, 4, 5)
let otherVector = new Vector(1, 0, -4)

/*Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no. */
// Creación de función
function ortogonales(vect1, vect2)
{
    // Es ortogonal si el producto punto es igual a 0
    if(vect1.dotProduct(vect2) == 0)
        return "Son ortogonales"
    // No es ortogonal si el producto punto no es igual a 0
    else
        return "No son ortogonales"
}
// Pruebas
// Creación de vectores
let myVector1 = new Vector(1, 0, -2)
let otherVector1 = new Vector(1, 2, 3)
let myVector2 = new Vector(2, 1, 1)
// Pruebas de funcionalidad
console.log(ortogonales(myVector, otherVector))
console.log(ortogonales(myVector1, otherVector1))
console.log(ortogonales(myVector1, myVector2))

/* Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 
'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'. */

// Creación de función
function hackerSpeak(cadena)
{
    // Inicialización de variables
    let traduccion = "" // guarda la nueva frase 
    let letra // guarda la letra actual
    let hackerAlphabet = { // diccionario con letras a cambiar para el hacker speak
        a: 4,
        e: 3,
        i: 1, 
        o: 0,
        s: 5, 
        z: 2,
        q: 9
    }
    // Iterar en cadena
    for (let i = 0; i < cadena.length; i++)
    {
        // Condición para determinar si la letra en la cadena se encuentra en el diccionario
        if (hackerAlphabet.hasOwnProperty(cadena[i]) == true)
        {
            // si se encuentra
            letra = cadena[i] // definir letra 
            traduccion = traduccion + hackerAlphabet[letra] // agregar traducción a la nueva frase
        }
        else
            // si no se encuentra
            traduccion = traduccion + cadena[i] // agregar letra a nueva frase
    }
    return traduccion
}
// Pruebas
console.log(hackerSpeak("caddicakleqiuo"))
console.log(hackerSpeak('Javascript es divertido'))
console.log(hackerSpeak('Esto es un videojuego'))

/* Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: 
factoriza(12) -> [1, 2, 3, 4, 6, 12]. */

// Creación de función
function factoriza(num)
{
    // Inicializar variable
    let factores = [num] // Array con número adentro (el número siempre va a ser factor de sí mismo)
    // Probar todos los números desde num hasta 1
    for (let i = num - 1; i > 0; i--)
    {
        // si la división del número con las pruebas no tiene residuo
        if(num%i == 0)
        {
            // Agregar factor
            factores.push(i)
        }
    }
    // Voltear factores para que aparezcan en orden de menor a mayor
    return factores.reverse()
}
//Pruebas
console.log(factoriza(12))
console.log(factoriza(30))
console.log(factoriza(27))

/* Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con 
los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0] */

// Creación de función
function quitaDuplicados(array)
{
    // Inicialización de variables 
    let arrayNoDuplicados = [array[0]] // Array con primer elemento, en el que se guardarán los elementos una sola vez (sin duplicados)
    let yaExiste = false // variable para verificar si ya existe el elemento
    // Recorrer el array
    for (let n = 0; n < array.length ; n++)
    {
        yaExiste = false //  valor inicial de falso (no existe)
        // iterar en el nuevo array con elementos no repetidos
        for (let m = 0; m < arrayNoDuplicados.length ; m++)
        {
            // Si el elemento está en los dos arrays (el original y el que no tiene duplicados)
            if (arrayNoDuplicados[m] == array[n])
            {
                // Indicar que ya existe
                yaExiste = true
            }
            // si se termina el array sin duplicados y no se identificó que el elemento ya existe
            if (yaExiste == false && m == (arrayNoDuplicados.length - 1))
            {
                // Agregar elemento al array sin duplicados
                arrayNoDuplicados.push(array[n])
            }
        }
    }
    return arrayNoDuplicados
}
// Pruebas
console.log(quitaDuplicados([5, 6, 7, 5, 7, 7, 8, 2, 6, 6]))
console.log(quitaDuplicados([3, 3, 3, 3, 3, 3, 3]))
console.log(quitaDuplicados([1, 2, 3, 4, 5]))


