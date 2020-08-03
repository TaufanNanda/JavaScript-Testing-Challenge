const mebiToKibi = require('../src/03');

test('Mengubah MB ke KB', () => {
	expect(mebiToKibi(1)).toBe(1024);
});