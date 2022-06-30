import { Student } from "./student.js"; 
// cuando exportamos con export default, no son necesarias las {}

//const {Student} = require("./student.js")

//const st = require(Student)
const student_1 = new Student("Akemi", "Katsuda", "akatsuda@outlook.com")
student_1.printInfo()