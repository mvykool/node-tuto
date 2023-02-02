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

//delete