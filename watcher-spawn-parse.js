'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];
 //used to halt the process to an unhanded exception
if (!filename) {
    throw Error('A file to watch must be specified!');
}
/*calls the program we wish to execute, creates childProcess and assigns to variable ls
creates output variable that buffers the output coming from the child process */
fs.watch(filename, () => {
    const ls = spawn('ls', ['-l' , '-h' , filename]);
    let output = ' ';
    //event listener
    ls.stdout.on('data' , chunk => output += chunk);

    ls.on('close' , () => {
        //will split on sequences of one or more whitespace 
        const parts = output.split(/ls+/);
        console.log([parts[0], parts[4], parts[8]]);
    });
});
console.log(`Now watching ${filename} for changes...`);

//run with node watcher-spawn-parse.js target.txt                                                                                              