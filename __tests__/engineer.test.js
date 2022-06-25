const Engineer = require('../lib/Engineer')


test("Can set gtihub account from constructor", () => {
    const testAccount = "lerantino";
    const e = new Engineer("mdubb", 1, "test@test.com", testAccount);
    expect(e.github).toBe(testAccount)
})