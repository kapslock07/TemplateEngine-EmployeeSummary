// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;

    }
}

// const manager = new Manager("Ryan", 625074, "ryan@email.com", 402);
// console.log(manager.name);

module.exports = Manager;