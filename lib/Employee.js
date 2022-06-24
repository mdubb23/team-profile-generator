class Employee {
    constructor (name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = "Employee";
}

getName() {
    return this.name
}

getManagerEmail() {
    return this.email
}

getManagerID() {
    return this.id
}

getRole() {
    return this.role
}

}
module.exports = Employee