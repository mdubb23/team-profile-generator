const fs = require('fs')
const Employee = require("./Employee");


class Manager extends Employee {
    constructor (name, managerID, email, managerOfficeNumber) {
        super(name, managerID, email, managerOfficeNumber);
        constructor(name, managerID, email);
        this.managerOfficeNumber = managerOfficeNumber;
        this.role = "Manager"
    }

    getManagerOfficeNumber() {
        return this.managerOfficeNumber                                                                      
    }
}

module.exports = Manager