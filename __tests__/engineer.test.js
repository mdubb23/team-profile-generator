const Engineer = require('../lib/Engineer')


test("Can set gtihub account from constructor", () => {
    const testAccount = "Octocat";
    const e = new Engineer("Mdubb", 1, "test@test.com", testAccount);
    expect(e.github).toBe(testAccount)
});

test("getRole() should return 'Engineer'", () => {
    const testRole = 'Engineer';
     const e = new Engineer("Mdubb", 1, "test@test.com", "Octocat");
     expect(e.getRole()).toBe(testRole);
 });