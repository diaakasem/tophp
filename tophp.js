#!/usr/bin/env node


const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const _ = require('lodash')
const path = require('path')
const fs = require("fs");
const { parse } = require('fast-csv');
const phpFormatter = require("./lib/format");

let fileFormat = null;
let filePath = null;

if (argv.help || argv.h) {
    console.log(`
        Usage: tophp [options] <file>
        Options:
            -h, --help  - show help
            -c, --csv   - convert csv file to php array
            -j, --json  - convert json file to php array
    `);
    process.exit(0);
}

// set filePath to csv or json from argv and show usage if none is available
if (argv.csv || argv.c) {
    filePath = argv.csv || argv.c;
    fileFormat = "csv";
} else if (argv.json || argv.j) {
    filePath = argv.json || argv.j;
    fileFormat = "json";
} else {
    console.log("Usage: tophp [--csv=<path>] [--json=<path>]");
    process.exit(1);
}

/**
 * Converts a csv file to a php array.
 *
 * @param {string} filePath - path to csv file
 */
function csvToPHP(filePath) {
    let fields;
    const data = [];
    fs.createReadStream(filePath)
        .pipe(parse({ headers: true }))
        .on('error', error => {
            console.error(error);
            process.exit(1);
        })
        .on('data', row => {
            if (_.isUndefined(fields)) {
                fields = _.keys(row);
            }
            data.push(_.values(row).map((v) => {
                const res = parseFloat(v);
                if (_.isNaN(res)) {
                    return v.trim();
                }
                return res;
            }));
        })
        .on('end', rowCount => {
            const formattedCode = phpFormatter(fields, data);
            console.log(formattedCode);
        });
}

/**
 * Converts json file to PHP array
 * @param {string} filePath - path to json file
 */
function jsonToPHP(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const formattedCode = phpFormatter(_.keys(data[0]), _.map(data, _.values));
    console.log(formattedCode);
}

// when fileFormat is csv use csv to php if json use json to php
if (fileFormat === "csv") {
    csvToPHP(filePath);
}
if (fileFormat === "json") {
    jsonToPHP(filePath);
}
