// import { listNotes } from "./notes";

const yargs = require('yargs');
const command = process.argv[2];
const notes = require('./notes');

// if(command === 'add'){
//     console.log('add');
// } else if (command == 'remove') {
//     console.log('remove');
// }
yargs.version('2.3.3');
yargs.command({
    command: 'add',
    description: 'This is the add command',
    builder:{
        title: {
            describe: 'Add title',
            demandOption: true
        },
        body: {
            describe: 'Add body',
            demandOption: true
        }
    },
    // handler: function(argv) {
    handler (argv) {
        // console.log(`Title: ${argv.title} and Body is ${argv.body}`)
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove Title',
            demandOption: true
        }
    },
    // handler: function(argv) {
    handler(argv) {
        // console.log('Removing a note');
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    description: 'list a note',
    // handler: function() {
    handler() {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    description: 'read a note',
    builder: {
        title: {
            describe: 'Read title',
            demandOption: true
        }
    },
    // handler: function() {
    handler(argv) {
        notes.readNote(argv.title);
        // console.log('Reading a note');

    }
})
yargs.parse();
// console.log(yargs.argv);
