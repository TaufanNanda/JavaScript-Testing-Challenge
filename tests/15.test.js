const roman = require('../src/15');

test('Mengubah bilangan romawi ke angka desimal', () => {
	expect(roman('I')).toBe(1);
});