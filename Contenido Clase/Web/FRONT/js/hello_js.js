//Crear función
function f(g)
{
    let x = g*5
    return x
}

// Crear clase
class point2d
{
    constructor(x, y)
    {
        this.x = x
        this.y = y
    }
    print()
    {
        console.log(this.x, "-", this.y)
    }
}

let point1 = new point2d
let var1 = 0
const var2 = 0
let var3 = "string"
let var4 = [3,4,2,1] //arreglo
let var5 = []
// nunca nunca usar var

// tipos de datos --> enteros, constantes, strings, etc etc
// Poner funciones al inicio y variables antes de llamadas a funciones


console.log(var1 + 5)
console.log(var2 * 2.5)
console.log(var3 + " heeey")

console.log(f(6))

var5.push(4)
var5.push(4, 5, 6, 7)
console.log(var5)

// ciclos
for(let i=0; i<var5.length; i++)
    console.log(var5[i], var5[i]%2)

for(let n of var5)
    console.log(n-1)

let contador = 0
while(contador < 10)
    console.log(contador)
    contador+=1

// Condiciones
if(true)
    console.log("True!")
else if(false)
    console.log("False!")
else   
    console.log("ADADA")

// con == es una comparación que no considera tipo de dato, === sí considera tipo de dato
if(contador == "10")
    console.log("sjdhjs")
else
    console.log("hjaie")


// tipo diccionario
let var6 = {
    a: "1",
    b: 2,
    c: 4.5
}
console.log(var6.a)
console.log(var6["b"])

console.log(var3[2])