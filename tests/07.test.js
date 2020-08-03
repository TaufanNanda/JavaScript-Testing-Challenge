const repeatLetter = require('../src/07');

test('Mengulang huruf', () => {
	expect(repeatLetter("Hello World! ", 2)).toBe("HHeelllloo WWoorrlldd!! ");
});