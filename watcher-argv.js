const fs = require('fs');
const filename = process.argv[2];
//used to halt the process to an unhanded exception   
if (!filename) {
    throw Error('A file to watch must be specified!');
}
fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now watching ${filename} for changes...`);

//use node watcher.js taret.txt to see chamges