const _ = require('lodash')
const path = require('path')
const fs = require("fs");
const { parse } = require('fast-csv');
const phpFormatter = require("./lib/format");

const fileName = _.last(process.argv);

if (fileName === __filename) {
    console.error('Usage: node <program.js> <file.csv>');
    process.exit(1);
}

let fields;
const data = [];
fs.createReadStream(path.resolve(__dirname, fileName))
  .pipe(parse({ headers: true }))
  .on('error', error => console.error(error))
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
