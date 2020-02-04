
// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})



// Create remove command
yargs.command({
    command: 'remove',
    describe: ' remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: ' lista all notes',
    handler() {
        notes.listNotes()
    }
})

// Read Note command
yargs.command({
    command: 'read',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// // Create read command
// yargs.command({
    //     command: 'read',
    //     describe: 'read the notes',
    //     handler() {
        //         console.log('read all the notes')
        //     }
        // })

yargs.parse()


// console.log(yargs.argv)

