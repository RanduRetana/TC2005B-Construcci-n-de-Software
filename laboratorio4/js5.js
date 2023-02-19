function reverseNumber(number){
    let reverse = 0;
    while(number > 0){
        reverse = (reverse * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return reverse;
}
alert("A continuación se le mostrará el número al revés")
alert(reverseNumber(123456789));