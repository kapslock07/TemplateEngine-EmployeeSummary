const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        type: "input",
        message: "What is the name of your team manager?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's ID number?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
    },
    {
        type: "number",
        message: "What is this person's office number?",
        name: "managerOffice"
    }
];

const generalQuestions = [
    {
        type: "input",
        message: "What is the name of this employee?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the employee's ID number?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "employeeEmail"
    },
    {
        type: "list",
        message: "What is the type of employee?",
        name: "employeeType",
        choices: ["Intern", "Engineer"]
    }
];

const managerQ = [
    {
        type: "number",
        message: "What is this person's office number?",
        name: "managerOffice"
    }
];
const engineerQ = [
    {
        type: "input",
        message: "What is this person's github username?",
        name: "engineerGithub"
    }
];
const internQ = [
    {
        type: "input",
        message: "What school did/does this person attend?",
        name: "internSchool"
    }
];

const continueQ = [
    {
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "continue"
    }
]

function continuePrompt() {
    inquirer
        .prompt({
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "continue"
        })
        .then((results) => {
            if (results.continue) {
                addEmployee()
            }
            else {
                console.log(employeeArr)
                let html = render(employeeArr);
                fs.writeFile(__dirname + '/output/team.html', html, 'utf8',
                    // callback function
                    function (err) {
                        if (err) throw err;
                        // if no error
                        console.log("Data is appended to file successfully.")
                    });
            }
        })
}

function addEmployee() {
    inquirer.prompt(generalQuestions)
        .then(answers => {
            if (answers.employeeType === "Intern") {
                inquirer.prompt(internQ)
                    .then(oneAnswer => {
                        const intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, oneAnswer.internSchool);
                        employeeArr.push(intern);
                        continuePrompt();
                    })
            }
            else {
                inquirer.prompt(engineerQ)
                    .then(oneAnswer => {
                        const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, oneAnswer.engineerGithub);
                        employeeArr.push(engineer);
                        continuePrompt();
                    })
            }
        })
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            employeeArr.push(manager);
            continuePrompt();
        });
}
init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
