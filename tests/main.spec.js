// Ejercicio 1: Verificar si un número es par
// Descripción: Escribe una función llamada esPar que reciba un número y devuelva true si el número es par, o false si es impar.
// Pasos:
// Escribe primero los tests en Jasmine.
// Implementa la función para que pase los tests.
// Ejercicio 2: Calcular el factorial de un número
// Descripción: Escribe una función llamada factorial que reciba un número entero no negativo y devuelva su factorial. Si el número es 0, debe devolver 1.
// Pasos:
// Escribe primero los tests en Jasmine.
// Implementa la función para que pase los tests.

describe('esPar kata', function() { 
    it('should exist a variable called n', () => {
        expect(n).not.toBe(undefined);
    })
    it('should be a number', () => {
        expect(typeof n).toBe('number');
    })
    it('should be a function', () => {
        expect(typeof esPar).toBe('function');
    })
    it('should return true for 2', function() {
    expect(esPar(2)).toBe(true);
    })
     it('should return false for 3', function() {
    expect(esPar(3)).toBe(false);
    })
})

describe('factorial kata', function() {
    it('should exist a variable called n', () => {
        expect(n).not.toBe(undefined);
    })
    it('should not be a negative number', () => {
        expect(n).toBeGreaterThanOrEqual(0);
    })
    it('should be a function', () => {
        expect(typeof factorial).toBe('function');
    })
    it('should return 1 for 0', function() {
        expect(factorial(0)).toBe(1);
    })
    it('should return 120 for 5', function() {
        expect(factorial(5)).toBe(120);
    })
})
