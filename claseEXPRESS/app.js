const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine", "ejs");
app.set("views", "views");

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    //('¡Hola mundo!'); //Manda la respuesta
    next();
});



const hockeyRutas = require('../routes/hockey.routes');

app.use('/hockey', hockeyRutas)

app.use((request, response, next) =>{
    console.log("Tercer middleware!");

    response.status(404);
    response.send("Lo sentimos, esta ruta no existe");
    next();
})
app.listen(3000);