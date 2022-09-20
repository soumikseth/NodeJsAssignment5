const http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Welcome to KFC!');
        res.end();
    }
    else if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('');
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write("{ phone: '0987654321', email: 'KFC@KFC.com' }");
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'error' });
        res.write('error');
        res.end();
    }
}
httpServer.listen(8080);
module.exports = httpServer;