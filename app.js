const inquirer = require('inquirer')

console.log('Matthew Williams');
console.log('1234@hotmail.com');
console.log('1');
console.log('1');

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: [
            'Engineer',
            'Intern',
            'Done'
        ]
    }
]

inquirer.prompt(questions)