// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        let name = Employee.name;
        let id = Employee.id;
        let email = Employee.email;

        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(`GitHub username: ${this.github}`);
    }
    getRole() {
        return "Engineer";
    }
}