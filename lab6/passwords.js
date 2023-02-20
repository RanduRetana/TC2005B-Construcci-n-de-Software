
    let = document.getElementById("psw1").onchange=activateInput;
    let = document.getElementById("psw2").onchange=validatePassword;
    

function activateInput(){
    let = document.getElementById("psw2").disabled=false;
}
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