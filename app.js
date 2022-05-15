const inquirer = require('inquirer')
const fs = require('fs')


const managerQuestions = () => {
    inquirer.prompt
    ([
        {
            type: 'input',
            name: 'manager',
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

    addEmployee()
    
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
            name: 'employeeEmail',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?'
        }
    ])
    
}


const engineerQuestions = () => {
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
            name: 'employeeEmail',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        }
    ])
}

const createFile = function() {
    return
}

const run = () => {
    managerQuestions()

}
run()
