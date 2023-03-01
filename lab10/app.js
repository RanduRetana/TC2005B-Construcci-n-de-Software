let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url === "/"){
        fs.readFile('./paginalab10.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
    else if(request.url==="/opciones"){
        response.write("AASDFASDF");
        response.end();
        
    }
    else if(request.url === "/inicio"){
        response.write("Bienvenido a tu psicologo ONLINE!")
    }
    
};

http.createServer(handleRequest).listen(7000);