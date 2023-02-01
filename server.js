const http = require("http");

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify({
            data: 'Hello World!'
        })) 
    })
    .listen(80, () => console.log("Servidor rodando na porta 80"))