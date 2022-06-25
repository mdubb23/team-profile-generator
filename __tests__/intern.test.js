const Intern = require('../lib/Intern')


test(" can set school from constructor", () => {
    const testSchool = "Princeton";
    const e = new Intern("Mdubb", 1, "test@test.com", testSchool)
    expect(e.school).toBe(testSchool)
});

 test("getRole() should return 'Intern'", () => {
   const testRole = 'Intern';
    const e = new Intern("Mdubb", 1, "test@test.com", "Princeton");
    expect(e.getRole()).toBe(testRole);
});