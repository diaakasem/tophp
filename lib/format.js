const _ = require('lodash');
const prettier = require("prettier");
const phpPlugin = require("@prettier/plugin-php");


/**
* Formats a list of fields coming fron SQL and their data records 
* into PHP Associative Array
*
* @param {Array<string>} fields The array of fields to use as keys in the resultind Associative Array
* @param {Array<Array<string|number>} data Array of Arrays holding the dataframe/db-records 
*
* @return {string} The PHP code representation of an Associative Array for that data
*/
function phpFormatter(fields, data) {
    const result = _(data)
        .map((item) => _.zip(fields, item))
        .map((record) => '[' + _.map(record, ([k, v]) => `'${k}'   => ${_.isString(v)? ("'" + v + "'"):v},`).join('\n') + '],')
        .join('\n');
    const code = `<?php $data = [${result}]`;
    const formattedCode = prettier.format(code, {
        plugins: [phpPlugin],
        parser: "php",
        phpVersion: "8.1",
        useTabs: true,
    });
    return formattedCode;
}

module.exports = phpFormatter;
