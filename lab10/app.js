let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url === "/opciones"){
        fs.readFile('./paginalab10.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    if(request.url === "/opciones" && request.method==="get"){
        response.write("HOLALALALAL")
    }
    }
    else if(request.url==="/despues"){
        response.write("AASDFASDF");
        response.end();
        
    }
    else if(request.url === "/inicio"){
        response.write("Bienvenido a tu psicologo ONLINE!")
    }
    else{
        response.statusCode=404;
        response.write("Lo sentimos, esa ruta no existe");
        response.end();
    }
    
};

http.createServer(handleRequest).listen(7000);