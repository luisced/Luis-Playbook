const User = require("./app/models/User");

describe("prueba de jest", () => {
    test("Creación de user", () => {
        const user = new User(1, "luiscedillo", "Bio", "2022-02-02", "2022-02-02");

        expect(user.id).toBe(1)
        expect(user.username).toBe("luiscedillo")

    })
})