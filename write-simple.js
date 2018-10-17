'use strict';
const fs = require('fs');
//writes to our target.txt file
fs.writeFile('target.txt', 'hello world', (err) =>{
    //will stop the process to unhanded expression 
    if (err) {
        throw err;
    }
    //will tell us when changes are made to target.txt
    console.log('File saved!');
});