const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set an office number from constructor argument", () => {
    const testNumber = 100;
    const e = new Manager("Mdubb", 1, "test@test.com", testNumber)
    expect(e.managerOfficeNumber).toBe(testNumber)
});

test("getRole() should return 'Manager'", () => {
    const testRole = 'Manager';
    const e = new Manager('Mdubb', 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testRole);
});