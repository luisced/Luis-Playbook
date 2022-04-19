const Ajolonauta = require('./../app/ajolonauta')

describe("Esto es una suite", () => {
    test('Caso de prueba 1', () => {
        const woopa = new Ajolonauta('woopa')

        expect(woopa.name).toBe('woopa');
    });
})



