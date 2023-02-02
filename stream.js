const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf-8'}); //<-- this is to already read it as strings

//write chunk

const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {
    console.log('---NEW CHUNK---');
    console.log(chunk)

    writeStream.write('\nNEW CHUNK\N');
    writeStream.write(chunk);
});