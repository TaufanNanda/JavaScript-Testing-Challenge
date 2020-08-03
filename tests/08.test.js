const repeatLetter = require('../src/08');

test('Mem-mirror array', () => {
	expect(repeatLetter([1, 2, 3])).toStrictEqual([1, 2, 3, 3, 2, 1]);
});