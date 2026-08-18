const math = require('../math');

describe('Função add', () => {
    test('soma 2 + 3 e retorna 5', () => {
        expect(math.add(2, 3)).toBe(5);
    });

    test('soma dois números negativos', () => {
        expect(math.add(-2, -3)).toBe(-5);
    });

    test('soma um número positivo e um negativo', () => {
        expect(math.add(5, -3)).toBe(2);
    });

    test('soma um número com zero', () => {
        expect(math.add(7, 0)).toBe(7);
    });
});

describe('Função subtract', () => {
    test('subtrai dois números positivos', () => {
        expect(math.subtract(10, 4)).toBe(6);
    });

    test('subtrai um número negativo', () => {
        expect(math.subtract(5, -3)).toBe(8);
    });

    test('retorna um resultado negativo', () => {
        expect(math.subtract(3, 5)).toBe(-2);
    });

    test('subtrai zero de um número', () => {
        expect(math.subtract(7, 0)).toBe(7);
    });
});

describe('Função multiply', () => {
    test('multiplica dois números positivos', () => {
        expect(math.multiply(4, 3)).toBe(12);
    });

    test('multiplica um número positivo por um negativo', () => {
        expect(math.multiply(4, -3)).toBe(-12);
    });

    test('multiplica dois números negativos', () => {
        expect(math.multiply(-4, -3)).toBe(12);
    });

    test('multiplica um número por zero', () => {
        expect(math.multiply(9, 0)).toBe(0);
    });
});

describe('Função divide', () => {
    test('divide dois números positivos', () => {
        expect(math.divide(10, 2)).toBe(5);
    });

    test('divide um número positivo por um negativo', () => {
        expect(math.divide(10, -2)).toBe(-5);
    });

    test('divide dois números negativos', () => {
        expect(math.divide(-10, -2)).toBe(5);
    });

    test('divide zero por um número', () => {
        expect(math.divide(0, 5)).toBe(0);
    });

    test('retorna um resultado decimal', () => {
        expect(math.divide(5, 2)).toBe(2.5);
    });

    test('lança um erro ao dividir por zero', () => {
        expect(() => math.divide(10, 0)).toThrow(
            'Não é possível dividir por zero.'
        );
    });
});