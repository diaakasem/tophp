// import fs and path
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const phpFormatter = require('../../lib/format');
const sample = require('../../samples/sample.json');


describe('phpFormatter', () => {
    it('should format a php file', () => {
        const fields = _.keys(sample[0]);
        const data = _.map(sample, _.values);
        const result = phpFormatter(fields, data);
        // read expected file text
        const expectedOutputPath = path.join(__dirname, '/format.expected.output.txt')
        const expected = fs.readFileSync( expectedOutputPath, 'utf8');
        expect(result).toEqual(expected);
    });
});
