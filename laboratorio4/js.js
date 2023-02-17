
    let number = Number(prompt("Ingresa un numero"));
    document.write('<table border="1">');
    document.write("<tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>")
    for(let i=1; i<=number; i++){
        document.write('<tr><th>' + i + "</th>" + '<td>' + i*i + "</td>" + '<td>' + i*i*i + "</td></tr>");

    }
    document.write('</table>');
