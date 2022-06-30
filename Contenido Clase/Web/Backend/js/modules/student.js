export class Student 
{
    constructor(name, surname, email)
    {
        this.name = name
        this.surname = surname
        this.email = email
    }

    printInfo()
    {
        console.log(`Name: ${this.name} ${this.surname} Email: ${this.email}`)
    }
}

// export default (solo se puede 1 cosa)
// export {Student, lo que sea}
// export antes de la variable/clase/etc que se quiera exportar
// la manera en la que exportamos afecta la manera en la que importamos