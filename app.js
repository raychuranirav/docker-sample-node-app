const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Intentional bug: Trying to access an undefined variable
    res.end("WELCOME TO THE WORLD OF CLOUD !!!\n" + someUndefinedVariable);
});
server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
module.exports = server;
