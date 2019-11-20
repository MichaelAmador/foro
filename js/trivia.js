
var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
 
    var preguntas = ["¿Seleccione los tipos de Lenguajes de Programación?",
                    "¿Qué es Administración?",
                    "¿Quién es Mark Zuckerbeng?"
    ];

    var respuestas = [
        ["Hablado y Escrito", "Interpretado y Compilado","Interpretado y Copiado"],
        ["Nada", "Administrar", "..."],
        ["Un don nadie","Fundador de Facebook", "Fundador de Google"]
    ];

    var aleatorio = Math.floor(Math.random*preguntas.length);

    var contenedor = document.getElementById("pregunta");

    for(i in preguntas){
        document.getElementById("p").innerHTML = "p1";
        document.getElementById("pregunta").innerHTML = " " +  preguntas[i] + "<br>";
                
        var boton =  document.createElement("button");   
            boton.value = "Verificar";
            boton.id = "h";
            boton.name = "btnVerificar";
            
        // contenedor.appendChild(input);       
        for(j in respuestas){
            var input = document.createElement("input");   
            input.type ="radio";
            input.name="p";
            input.id = 0;
            contenedor.appendChild(input);
            
            
            document.getElementById("pregunta").innerHTML += respuestas[i][j] + "<br>";
            document.getElementById("puntuacion").innerHTML = "10";
        }        
        contenedor.appendChild(boton);
        document.getElementById("p").innerHTML = "";
        document.getElementById("h").innerHTML = "Verificar";

        // document.writeln("2");
    }    
    
    // return true;
    
})
