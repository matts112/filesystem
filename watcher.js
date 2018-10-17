'use strict';
//pulls a nodejs module and returns it 
const fs = require('fs');
//takes a path to a file and a callback back function to invoke whenever a file changes. 
fs.watch('target.txt',() => console.log('File changed!'));
console.log('Now watching target.txt for changes...');