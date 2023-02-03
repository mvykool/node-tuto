const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    //set header conttent type to get res
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>hey everyone</h1>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for req on port 3000')
});