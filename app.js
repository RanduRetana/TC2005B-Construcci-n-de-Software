console.log("hola mundo");
console.info("asdfasdf");

//fs es el m´dulo para trabajar con el sistema de archivos
const filesystem = require("fs");
//filesystem.writeFileSync("hola.txt", "hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//for(let item of arreglo){
//    setTimeout(() => {console.log(item);}, item)
//}

const http = require("http");

const server = http.createServer( (request, response) => {
    console.log(request.url);
    //response.setHeader("Content-type", "text/html");
    //response.write("");
    response.end("hola");
});
server.listen(3000)



