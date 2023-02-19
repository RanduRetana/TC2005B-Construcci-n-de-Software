let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let start = Date.now()
    let respuesta = prompt(num1 + " + " + num2 + " = ");
    let end = Date.now()
    if(respuesta == num1 + num2){
        alert("Correcto" + " Tiempo: " + (end - start) + " ms");
    }
    else{
        alert("Incorrecto" + " Tiempo: " + (end - start) + " ms");
    }