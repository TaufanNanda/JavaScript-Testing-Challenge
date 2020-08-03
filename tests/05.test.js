const isPrime = require('../src/05');

test('Menentukan Bilangan Prima', () => {
	expect(isPrime(1001)).toBe(false);
});