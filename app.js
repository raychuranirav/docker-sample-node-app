const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Intentional bug: Hardcoded response message
    res.end("WELCOME TO THE WORLD OF CLOUD !!!\n");
});
server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
module.exports = server;
