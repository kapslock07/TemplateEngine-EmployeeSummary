// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Employee Name: ${this.name}`);
    }

    getId() {
        console.log(`Employee ID: ${this.id}`);
    }

    getEmail() {
        console.log(`Employee Email: ${this.email}`);
    }

    getRole() {
        return "Employee";
    }
}
// const employee = new Employee("Ryan", 625074, "ryan@email.com");
module.exports = Employee;
