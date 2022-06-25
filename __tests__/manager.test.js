const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set an office number from constructor argument", () => {
    const testNumber = 100;
    const e = new Manager("mdubb", 1, "test@test.com", testNumber)
    expect(e.managerOfficeNumber).toBe(testNumber)
});