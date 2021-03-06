/*
 C:\react\coindex-cli>coindex key -h
 C:\react\coindex-cli>coindex key set
 */

const { program } = require('commander');

program
    .command('set')
    .description('Set API Key -- Get at https://nomics.com')
    .action(() => console.log('Hello from set'));

program
    .command('show')
    .description('Show API Key')
    .action(() => console.log('Hello from show'));

program
    .command('remove')
    .description('Remove API Key')
    .action(() => console.log('Hello from remove'));

program.parse(process.argv);
