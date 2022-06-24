const _ = require('lodash');
const prettier = require("prettier");
const phpPlugin = require("@prettier/plugin-php");

/**
 * converts a string to a number if all characters are numbers
 * @param {string} text - string to convert
 * @returns {number} - converted number or original string
 */
function toNumber(text) {
    if (!_.isString(text)) {
        return text;
    }
    if (/^\d+\.(\d+)?$/.test(text)) {
        // if float, return parsed float
        return parseFloat(text);
    } else if (/^\d+$/.test(text)) {
        // if integer, return parsed integer
        return parseInt(text);
    }
    // otherwise return original string surrounded in single quotes
    return `'${text.trim()}'`;
}

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
        .map((record) => '[' + _.map(record, ([k, v]) => `'${k}'   => ${toNumber(v)},`).join('\n') + '],')
        .join('\n');
    const code = `<?php $data = [${result}]`;
    const formattedCode = prettier.format(code, {
        plugins: [phpPlugin],
        parser: "php",
        phpVersion: "8.1",
        tabWidth: 4,
        // use single quotes
        singleQuote: true,
        useTabs: true,
    });
    return formattedCode;
}

module.exports = phpFormatter;
