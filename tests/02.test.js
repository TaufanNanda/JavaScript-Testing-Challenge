const sum = require('../src/02');

test('Penjumlahan 1 + 2 = 3', () => {
	expect(sum(2, 2)).toBe(4);
});