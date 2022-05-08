import users from '../js/users_module.js'  // Para import, poner ruta absoluta/relativa

const user1 = new users('Akemi', 'Katsuda', 'a01025303@tec.mx')

user1.printName()

document.getElementById("displayInfo").innerHTML = user1.getInfo()