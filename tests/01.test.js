const charLength = require('../src/01');

test('Panjang karakter dari suatu text', () => {
	expect(charLength()).toBe(42);
});