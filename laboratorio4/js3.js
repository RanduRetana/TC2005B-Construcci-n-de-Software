function contador(nums){
    let negativos = 0;
    let positivos = 0;
    let ceros = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            negativos++;
        }
        else if(nums[i] > 0){
            positivos++;
        }
        else if(nums[i] == 0){
            ceros++;
        }
    }
    return [negativos, positivos, ceros];
}

x=[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
alert("A continuación se  le mostrará la cantidad de números negativos, positivos y ceros que generó el programa anteriormente")
alert(contador(x));
