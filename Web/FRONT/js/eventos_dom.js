// 1. Posición del mouse 
function posMouse (event) {
    const mouseP = document.getElementById('mousePosition')
    mouseP.textContent = `Posición del mouse: ${event.screenX} - ${event.screenY}`
}

// 2. Obtener el nombre y apellido y mostrar nombre completo
function inputNames (event) {
    event.preventDefault()
    const Fname = document.getElementById('fname')
    const Lname = document.getElementById('lname')
    const Cname = document.getElementById('nombreC')
    Cname.textContent =  `Nombre completo: ${Fname.value} ${Lname.value} `
}

//3. Agregar una fila o columna a la tabla y mostrar tabla nueva
function addRow (event) {
    const tabla = document.getElementById("sampleTable")
    const rowsExistentes = tabla.rows.length
    const colsExistentes = tabla.rows[0].cells.length
    const filaNueva = tabla.insertRow(tabla.rows.length)
    for (i = 0; i < colsExistentes; i++) {
        let celdaNueva = document.createElement("td")
        let textoCelda = document.createTextNode("Row "+(rowsExistentes+1)+" column "+(i+1))
        celdaNueva.appendChild(textoCelda);
        filaNueva.appendChild(celdaNueva);
      }
}

function addCol (event) {
    const tabla = document.getElementById("sampleTable")
    const colsExistentes = tabla.rows[0].cells.length
    const rowsExistentes = tabla.rows.length
    
    for (i = 0; i < rowsExistentes; i++) {
        let celdaNueva = document.createElement("td")
        let textoCelda = document.createTextNode("Row "+(i+1)+" column "+(colsExistentes+1))
        celdaNueva.appendChild(textoCelda);
        tabla.rows[i].appendChild(celdaNueva);
      }
}

// Cambiar contenido de celda en la tabla existente, recibiendo la posición de la fila y columna y el contenido que se quiere insertar
function changeContent (event) {
    const tabla = document.getElementById("myTable")
    const colsExistentes = tabla.rows[0].cells.length
    const rowsExistentes = tabla.rows.length
    const chRow = document.getElementById('rowChange')
    const chCol = document.getElementById('colChange')
    const chCont = document.getElementById('contChange')
    console.log(rowsExistentes)
    /*
    if(chRow <= rowsExistentes && chCol <= colsExistentes){
        let newContent = chCont.value
        let newCell = document.createElement("td")
    }*/
}

document.addEventListener("mousemove", posMouse)
document.addEventListener("submit", inputNames)
document.addEventListener("insertRow", addRow)
document.addEventListener("insertCol", addCol)