function validate(){
    // Validar el DNI; si no es correcto enviar mensaje al usuario.
	numeroDNI = document.getElementById('frmAcceso').txtDNI.value;
	letraDNI = document.getElementById('frmAcceso').sLetra.value;
    if (noEntry(numeroDNI) == false)
        return;
    if (EsNumerico(numeroDNI) == false)
        return;
    if (letraCorrecta(letraDNI,numeroDNI) == false)
        return;
	// Si es valido, enviar el DNI a la siguiente página.
	var storage = localStorage; 
	var dni = numeroDNI+letraDNI;
	storage.setItem('dni1',dni);
	window.location="bienvenido.html";
}

function letraCorrecta(letra, dni){
    var resto = dni % 23;
    var valid = "TRWAGMYFPDXBNJZSQVHLCKE";

    if(resto==valid.indexOf(letra)){
        return true;
    }else{
        alert("La letra del NIF es incorrecta. Seleccionar la letra " + valid.substr(resto,1));
        return false;
    }
}

function noEntry(field){
    mt = field;
    if (mt.length < 1) {
        alert("Completar el campo DNI.");
        field.focus();
        return false;
    }
    else {
        return true;
    }
}

function EsNumerico(field){
    var valid = "0123456789";
    var ok = "yes";
    var temp;
    for (var i = 0; i < field.length; i++) {
        temp = "" + field.substring(i, i + 1);
        if (valid.indexOf(temp) == "-1") 
            ok = "no";
    }
    if (ok == "no") {
        alert("Teclear un DNI (sin letras, sólo números)");
        field.focus();
        field.select();
        return false;
    }
    return true;
}