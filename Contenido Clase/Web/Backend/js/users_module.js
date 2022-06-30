export default class users
{
    constructor(name, surname, email)
    {
        this.name = name
        this.surname = surname
        this.email = email
    }

    printName()
    {
        console.log(`Name:  ${this.name} ${this.surname} Email: ${this.email}`)
    }

    getInfo()
    {
        return `Name:  ${this.name} ${this.surname} Email: ${this.email}`
    }

}
// export {users}
// export default users
