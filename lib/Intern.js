// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        let name = Employee.name;
        let id = Employee.id;
        let email = Employee.email;

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${this.school}`);
    }
    getRole() {
        return "Intern";
    }
}