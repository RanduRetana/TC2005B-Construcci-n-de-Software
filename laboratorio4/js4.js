function promedios(matriz) {
    let promediosArr = [];
    for (let i = 0; i < matriz.length; i++) {
      let fila = matriz[i];
      let suma = 0;
      for (let j = 0; j < fila.length; j++) {
        suma += fila[j];
      }
      let promedio = suma / fila.length;
      promediosArr.push(promedio);
    }
    return promediosArr;
  }

let matriz = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
let promediosMatriz = promedios(matriz);
alert("A continuación se le mostrará el promedio de cada fila de la matriz")
alert(promediosMatriz);