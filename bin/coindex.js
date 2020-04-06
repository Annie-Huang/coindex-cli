#!/usr/bin/env node
const { program } = require('commander');
const pkg = require('../package');

program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .parse(process.argv);

console.log('Hello from conindex');

/*
console.log(process.argv);
C:\react\coindex-cli>coindex key
[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Annie\\AppData\\Roaming\\npm\\node_modules\\coindex\\bin\\coindex.js',
    'key'
]
console.log(process.argv[2]);
C:\react\coindex-cli>coindex key
key
*/
