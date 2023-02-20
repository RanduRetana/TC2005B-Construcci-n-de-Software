
    let = document.getElementById("psw1").onchange;
    let = document.getElementById("psw2").onchange=validatePassword;
    
function validatePassword(){    
    if(psw1.value != psw2.value){
        alert("Las contraseñas no coinciden");
        return false;
    }
    else if(psw1.value == psw2.value){
        alert("Las contraseñas coinciden");
        return true;
    }
}