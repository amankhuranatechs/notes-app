






/**
 * 
 * Lecture 4 :: Getting input from User
 * 

const command = process.argv[2];

if(command === 'add'){
    console.log('add');
} else if (command == 'remove') {
    console.log('remove');
}

 */

/**
 *  Lecture 4 :: Printing in color
 * 
 * 
 * 


const chalk = require('chalk');

console.log(chalk.red('I am Printing this line using chalk.'))


const greenMesg =  chalk.blue.bold.inverse('Success!!')

console.log(greenMesg)

 */



/**
 *  LECTURE 1:  file system
 * 
 * 

const fs = require('fs') //core node module  // The returned valuse is stored in the fs variable.

fs.writeFileSync('notes.txt','My name is Aman.');


fs.appendFileSync('notes.txt', ' And my last name is khurana.')

 */

/**
 * 
 * LECTURE 2:  Importing you own module , like define variable  in other file and access in api.js
 * 


// const name  = require('./utils');
const add  = require('./utils');

const sum = add(3, 45);

console.log(sum);


-------


const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

 */

/**
 * 
 *   Lecture 3 :: Importing npm modules 
 * 
 * const validator =  require('validator');

console.log(validator.isEmail('aman@finxera.com'));


console.log(validator.isURL('www.google'));

 */

