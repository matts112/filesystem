'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
 //used to halt the process to an unhanded exception
if (!filename) {
    throw Error('A file to watch must be specified!');
}
//calls the program we wish to execute, then takes the standard output from the childProcess to our own standard output stream 
fs.watch(filename, () => {
    const ls = spawn('ls', ['-l' , '-h' , filename]);
    let output = ' ';

    ls.stdout.on('data' , chunk => output += chunk);

    ls.on('close' , () => {
        const parts = output.split(/ls+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
});
console.log(`Now watching ${filename} for changes...`);

//run with node watcher-spawn.js target.txt                                                                                              