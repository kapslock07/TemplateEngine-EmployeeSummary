// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        let name = Employee.name;
        let id = Employee.id;
        let email = Employee.email;

        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

// const manager = new Manager(402);
// console.log(manager.name);
