const fs = require('fs');

//read 

fs.readFile('./docs/blog.txt', (err, data) => {
   if(err){
    console.log(err);
   }

   console.log(data.toString());
});

//write  

fs.writeFile('./docs/blog.txt', 'hello again', () => {
    console.log('done writing')
})
 

//directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err) {
          console.log(err);
        }
      
        console.log("folder created")
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}


//delete

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}