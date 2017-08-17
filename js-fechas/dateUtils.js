
// Recibe una fecha con formato DD/MM/AAAA e indica si es correcta
function esFechaCorrecta (fecha) {
    //Se obtienen año, mes y día
    var arrayFecha = fecha.split("/");      
    //se comprueba que no vengan vacíos
    if (arrayFecha.length!=3 || arrayFecha[0]=="" || arrayFecha[1]=="" || arrayFecha[2]=="")
        return false;      
    var anyo = parseInt(quitaCeros(arrayFecha[2]));
    var mes = devuelveMes(quitaCeros(arrayFecha[1]));
    var dia = parseInt(quitaCeros(arrayFecha[0]));      
    //Comprobamos que los valores son numéricos(p.e. valida si se introducen ceros en día, mes o año)
    if (isNaN(anyo) || isNaN(mes) || isNaN(dia)) {
        alert("Fecha incorrecta, por favor, introduzca una fecha válida");
        return false;
    } 
    //Comprobamos valores correctos de dia mes y año
    if (dia<1 || dia>31 || mes<1 || mes>12 || anyo<0){
        alert("Fecha incorrecta, por favor, introduzca una fecha válida");
        return false;
    }            
    //Comprobamos meses de 30 dias
    if ((mes==4 || mes==6 || mes==9 || mes==11) && dia>30){
        alert("Fecha incorrecta, por favor, introduzca una fecha válida");
        return false;
    }            
    //validaciones para febrero y bisiestos
    if (mes==2 && (dia > 29 || (dia==29 && ((anyo%400!=0) && ((anyo%4!=0) || (anyo%100==0)))) )){
        alert("Fecha incorrecta, por favor, introduzca una fecha válida");
        return false;
    }
    
    return true;
}
 
/* Quita los ceros del principio de una cadena si tiene (01)->(1) */
function quitaCeros(cad){
    var enc = false;
    var i=0;
    while (i<cad.length && !enc) {
        if (cad.charAt(i)=='0'){
            i++;
        } else{
            enc = true;
        }
    }
    return (cad.substring(i,cad.length));
}
 
//Devuelve el número del mes
function devuelveMes (mes) {
    var numMes = null;
    var meses = new Array("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
    if (!isNaN(parseInt(mes))){ //Es un número
        numMes = parseInt(mes);
    }
    return numMes;
}
 

function comprFechas(FechaInicio, FechaFin) {
    var maxDistMeses = 6;
    var correctas = compruebaFechas(FechaInicio, FechaFin, maxDistMeses);
    return correctas;    
}
 
function compruebaFechas(sFechaInicio, sFechaFin, rango) {
    var DIA = 0;
    var MES = 1;
    var ANIO = 2;
    var resultado = "";
    // var sonCorrectas = false;
    var formatoFecha = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!formatoFecha.test(sFechaInicio) || !formatoFecha.test(sFechaFin)) {
        // alert('Fecha incorrecta: introduzca fechas con formato "dd/mm/aaaa"');
        resultado='Fecha incorrecta: introduzca fechas con formato "dd/mm/aaaa"';
    }else {
        var inicioOk = esFechaCorrecta (sFechaInicio);
        var finOk = esFechaCorrecta (sFechaFin);
        if(inicioOk==true && finOk==true){
            var arrayFechaInicio = sFechaInicio.split("/");
            var arrayFechaFin = sFechaFin.split("/");
            var fechaInicio = new Date(arrayFechaInicio[ANIO], arrayFechaInicio[MES]-1, arrayFechaInicio[DIA]);
            var fechaFin = new Date(arrayFechaFin[ANIO], arrayFechaFin[MES]-1, arrayFechaFin[DIA]);
            var esInicioMayor = (fechaInicio.getTime() - fechaFin.getTime()) > 0;                   
            if (esInicioMayor) {
                // alert('La fecha de inicio tiene que ser anterior a la fecha final');
                resultado='La fecha de inicio tiene que ser anterior a la fecha final';
            }else if (rango != undefined) {  
                var mesesLimite = arrayFechaInicio[MES] -1 + parseInt(rango);
                var mesLimite = mesesLimite % 12;
                var anioLimite = parseInt(parseInt(arrayFechaInicio[ANIO]) + (mesesLimite / 12));
                var fechaLimite = new Date(anioLimite, mesLimite, arrayFechaInicio[DIA]);
                var superaLimite = (fechaFin.getTime() - fechaLimite.getTime()) > 0;
                if (superaLimite){
                    // alert('Las fechas introducidas han de distar menos de '+ rango +' meses entre si');
                    resultado='Las fechas introducidas han de distar menos de '+ rango +' meses entre si';
                }else{
                    // sonCorrectas = true;
                    resultado="Intervalo de fechas correcto.";
                }
            }else{
                // sonCorrectas = true;
                 resultado="Intervalo de fechas correcto.";
            }
        }
    }
    // return sonCorrectas;
    return resultado;
}
 