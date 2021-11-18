
const chalk = require('chalk');
const fs = require('fs');

// const getNotes  = function notes() {
const getNotes  = () => {
    return 'These are my notes from the notes file.';
}


// const addNote = function add(title, body) {
const addNote =  (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(function(note) {
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title == title;
    // })
    // const duplicateNotes = notes.filter((note) => note.title == title)
    const duplicateNote = notes.find((note) => note.title == title);
    debugger

    // if(duplicateNotes.length === 0 ) {
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.bold.inverse('New Note Added!!!'))
    } else {
        console.log(chalk.red.bold.inverse('Title Already taken!!!'))
    }
}

// const removeNote = function(title) {
const removeNote = (title) => {
    const notes = loadNotes();
    // const index = notes.findIndex(function(note) {
    //     return note.title == title
    // })
    // console.log(index);
    // const removedNotes = notes.filter(function(note) {
    const removedNotes = notes.filter((note) => {
        return note.title != title;
    })
    if(notes.length > removedNotes.length) {
        console.log(chalk.green.bold.inverse(`Note ${title} Removed!`))
        saveNotes(removedNotes);
    } else {
        console.log(chalk.red.bold.inverse(`No Note Removed!`))
    }

}


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.white.bold.inverse('Your Notes'));
    console.log(notes);
}

const readNote = (title) => {
    const notes = loadNotes();
    const read = notes.find(note => note.title === title);

    if(read) {
        console.log(chalk.green.bold.inverse('Title Found'));
        console.log(read);
    } else {
        console.log(chalk.red.bold.inverse('Title NOT Found'));
    }

}


// const saveNotes = function (notes) {
const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}



// module.exports = getNotes;

// const loadNotes = function () {
const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
       return [];
    }  
  
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote,
    listNotes,
    readNote
    
}

