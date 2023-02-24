const filesystem = require("fs");

var suma=0;
function promedio(arreglo){
    for(let valor of arreglo){
        suma = suma + valor;
    }
    return suma/arreglo.length;
}

function writeString(stringArg){
    filesystem.writeFileSync("NewFile.txt", stringArg);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

const arreglo = [10, 54, 65, 20, 354, 21, 54, 844, 21, 21];

console.log(promedio(arreglo));
writeString("hola como estan");
console.log("Hola Mundo");

let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('../paginapersonal.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(8000);

