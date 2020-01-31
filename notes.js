const fs = require('fs')
const chalk = require('chalk')

// CHALK OPTIONS

const success = chalk.green.inverse
const error = chalk.red.inverse

const getNotes = () => 'Your notes....'

// ADDING A NOTE TO NOTES ARRAY

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

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

const removeNote = function(title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title != title
    })

    if (notes.length === notesToKeep.length) {
        console.log(error("No note found!"))
    } else {
        saveNotes(notesToKeep)
        console.log(success('Note removed!'))  
    }

    

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}