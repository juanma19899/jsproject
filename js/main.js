let curso = prompt("Ingresa el nombre del curso a calificar");
let numEstudiantes = prompt("Ingresa la cantidad de estudiantes");
let numNotas = prompt("Ingresa la cantidad de notas");
let contador = 0;
let acumulador = 0;
let prom = 0;

for (i = 0; i < numEstudiantes; i++) {
    let nombreEstudiante = prompt("Ingresa el nombre del estudiante");
    console.log(nombreEstudiante)
    for(j = 1; j <= numNotas; j++) {
        let nota = parseFloat(prompt("Ingresa la nota " + j));
        acumulador = parseFloat(acumulador + nota);
        contador++;
        console.log(nota);
    }
    console.log(acumulador);
    prom = acumulador / contador;
    console.log(prom);
    if(prom >= 3){
        document.write(nombreEstudiante + " aprobó el curso de " + curso + ".</br>")
    }
    else{
        document.write(nombreEstudiante + " reprobó el curso de " + curso + ".</br>")
    }
    acumulador = 0;
    contador = 0;
}