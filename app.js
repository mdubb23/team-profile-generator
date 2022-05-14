const inquirer = require('inquirer')

console.log('Matthew Williams');
console.log('1234@hotmail.com');
console.log('1');
console.log('1');

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
} 
