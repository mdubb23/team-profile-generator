const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { table } = require('console');

const employees = []

const Employee = {
    Intern: "Intern",
    Engineer: "Engineer",
    Manager: "Manager"
};


const managerQuestions = () => {
    inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers Email?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your managers employee ID?',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your managers office number?',
        }

    ])
    .then((data) => {
        const manager = new Manager(
            data.name,
            data.managerEmail,
            data.managerID,
            data.managerOfficeNumber
            
        );
        console.table(manager);
        employees.push(manager);
        addEmployee();
    });


}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'what type of employee would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Done'
            ]
        }
    ])

    .then((data) => {
        if(data.role === 'Engineer'){
            engineerQuestions()
        }
        else if(data.role === 'Intern') {
            internQuestions()
        }
        else{
            createFile()
        }
    })
}



const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?'
        }
    ])

    .then((data) => {
        const intern = new Intern(
            data.name,
            data.employeeID,
            data.email,
            data.school
        )
        console.table(intern);
        employees.push(intern);
        addEmployee();
    })
    
}


const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?'
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the employees ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?'
        }
    ])

    .then((data) => {
        const engineer = new Engineer(
        data.name,
        data.employeeID,
        data.email,
        data.github
        )
        console.table(engineer);
        employees.push(engineer);
        addEmployee()
    })
}



const createFile = function() {
    return
}

const run = () => {
    managerQuestions()

}
run()
