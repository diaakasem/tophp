let tophp;

describe.skip('tophp', () => {
    beforeAll(() => {
        tophp = require('../src/tophp.js');
    });

	it('should convert a javascript object to a php array', () => {
		const obj = {
			a: 1,
			b: 2,
			c: 3
		};
		const php = tophp(obj);
		expect(php).toBe('array("a" => 1, "b" => 2, "c" => 3)');
	});

})
