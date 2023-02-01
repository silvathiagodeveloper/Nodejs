const http = require("http");

http
    .createServer((request, response) => {
        let message = {
            data: 'Hello World!'
        }
        response.writeHead(200, { 'Content-Type': 'application/json'});
        console.log(request.url)
        switch(request.url) {
            case '/produto' : 
                message = {
                    module: 'Produtos', 
                    action: 'show'
                }
                break
            case '/usuario' : 
                message = {
                    module: 'Usuários', 
                    action: 'show'
                }
                break
        }

        response.end(JSON.stringify(message)) 
    })
    .listen(80, () => console.log("Servidor rodando na porta 80"))