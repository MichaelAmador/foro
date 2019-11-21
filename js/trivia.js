
var btnSaludar = document.getElementById("btnSaludar");
var btnVerificar = document.getElementById("btnVerificar");

var nPreguntas = 0;
var nCorrectas = 0;
var seleccion = "";

btnSaludar.addEventListener('click', function () {

    iniciar();
    btnVerificar.style.visibility = "visible";

})

btnVerificar.addEventListener("click", function(){
    nPreguntas += 1;
    respuestaCorrecta();
    iniciar();
})

function iniciar() {
    if (nPreguntas <= 2) {
        document.getElementById("0").style.visibility = "visible";
        document.getElementById("1").style.visibility = "visible";
        document.getElementById("2").style.visibility = "visible";
        document.getElementById("txt1").style.visibility = "visible";
        document.getElementById("txt2").style.visibility = "visible";
        document.getElementById("txt3").style.visibility = "visible";
        preguntar()
    } else {
        mostrarResultado();
    }
}

function preguntar() {

    var contenedor = document.getElementById("pregunta");


    var preguntas = ["¿Seleccione los tipos de Lenguajes de Programación?",
        "¿Qué es Administración?",
        "¿Quién es Mark Zuckerbeng?"
    ];

    var respuestas = [
        ["Hablado y Escrito", "Interpretado y Compilado", "Interpretado y Copiado"],
        ["Nada", "Administrar", "..."],
        ["Un don nadie", "Fundador de Facebook", "Fundador de Google"]
    ];

    document.getElementById("pregunta").innerHTML = " " + preguntas[nPreguntas] + "<br>";

    for (i in respuestas) {
        // var input = document.createElement("input");
        // input.type = "radio";
        // input.name = "l";
        // input.id = "j";
        // input.value = i;
        // contenedor.appendChild(input);

        if(i == 0){
            document.getElementById("txt1").innerHTML = respuestas[nPreguntas][i];
        }else if(i == 1){
            document.getElementById("txt2").innerHTML = respuestas[nPreguntas][i];
        }else if(i == 2){
            document.getElementById("txt3").innerHTML = respuestas[nPreguntas][i];
        }

        // document.getElementById("pregunta").innerHTML += respuestas[nPreguntas][i] + "<br>";
        // var puntos = document.getElementById("puntos").innerHTML;
        // puntos = puntos + 10;
        // // console.log(puntos);
        // document.getElementById("puntos").value = puntos;

        // input.addEventListener("select", function(){
        //     document.getElementById("seleccion").innerHTML += " " + input.value;
        //     // console.log(r);
        // })

    }
    
    document.getElementById("btnSaludar").style.visibility = "hidden";  
    
}

function mostrarResultado() {
    document.getElementById("btnVerificar").style.visibility = "hidden";
    document.getElementById("btnSaludar").style.visibility = "visible";
    // document.getElementById("r").style.visibility = "hidden";   // Eliminar radioButtons despues de terminar

    switch (nCorrectas) {
        case 0:
            alert("Estabas casi dormido, no ? \n Sigue Intentando: Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
        case 1:
            alert("Te falto.. \n Sigue Intentando: Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
        case 2:
            alert("Te falto.. \n Sigue Intentando: Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
        case 3:
            alert("Te falto.. \n Sigue Intentando: Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
        case 4:
            alert("Te falto.. \n Sigue Intentando: Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
        case 5:
            alert("Ve por tu premio ... /n Si fuiste de los primeros en terminar.. \n : Respuestas correctas:" + nCorrectas + " de " + nPreguntas);
            break;
    }

    nPreguntas = 0;

    document.getElementById("pregunta").style.visibility = "hidden";
    document.getElementById("0").style.visibility = "hidden";
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("txt1").style.visibility = "hidden";
    document.getElementById("txt2").style.visibility = "hidden";
    document.getElementById("txt3").style.visibility = "hidden";
}

function elementoSeleccionado(){
    var elementos = document.getElementById("k").length;
    for(var i=0; i < elementos ; i++){
        if(elementos[i].name = "k" && elementos[i].checked == true){
            console.log(elementos[i]);
            return elementos[i];
            
        }
    }
    return false;
}

function getElementoSeleccionado(ctrl){
    for(i =0; i < ctrl.length; i++){
        if(ctrl[i].checked){
             console.log(ctrl[i].value);
            return ctrl[i].value;
        }
        
    }
}

function respuestaCorrecta() {
    // var res = document.getElementById("0").checked;
    // elementoSeleccionado();
    // getElementoSeleccionado(document.frm);
    // var formulario = document.forms[0];
    // for(var i=0; i < formulario.k.length; i++){
    //     if(formulario.k[i].checked){
    //         res = formulario.k[i].value;
    //         console.log(res);
    //     }
    // }
    var p = getElementoSeleccionado(document.frm);
    console.log(p);
    if (nPreguntas == 0) { 
            
        if (p == 0) {        
            nCorrectas += 1;
        }
    } else if (nPreguntas == 1) {
        if (document.getElementById("0").value == "1") {
            nCorrectas += 1;
        }
    } else if (nPreguntas == 2) {
        if (document.getElementById("0").value == "1") {
            nCorrectas += 1;
        }
    }

    console.log("Respuestas Correctas:" + nCorrectas);
}

