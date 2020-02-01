const fs = require('fs')
const chalk = require('chalk')

// CHALK OPTIONS

const success = chalk.green.inverse
const error = chalk.red.inverse
const info = chalk.bgYellow.black


const listNotes = () => {
    const notes = loadNotes()
    console.log(info('This is the list of To Do Stuff.....'))
    notes.forEach(note => console.log(note.title));
}

// ADDING A NOTE TO NOTES ARRAY

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(success('New note added...'))
    } else {
        console.log(error('Note title taken...'))
    }

    saveNotes(notes)
}

// REMOVING A NOTE TO NOTES ARRAY

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title != title)

    if (notes.length === notesToKeep.length) {
        console.log(error("No note found!"))
    } else {
        saveNotes(notesToKeep)
        console.log(success('Note removed!'))  
    } 
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes

}