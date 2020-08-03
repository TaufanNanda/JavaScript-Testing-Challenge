const isLeapYear = require('../src/04');

test('2021 adalah bukan tahun kabisat', () => {
	expect(isLeapYear(2021)).toBe(false);
});