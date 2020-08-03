const isIsogram = require('../src/14');

test('Mendeteksi isogram atau bukan', () => {
	expect(isIsogram('gelas')).toBe(true);
	expect(isIsogram('makan')).toBe(false);
});