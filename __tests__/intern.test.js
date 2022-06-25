const Intern = require('../lib/Intern')


test(" can set school from constructor", () => {
    const testSchool = "Princeston";
    const e = new Intern("mdubb", 1, "test@test.com", testSchool)
    expect(e.school).toBe(testSchool)
});