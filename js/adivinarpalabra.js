// Adivinar palabra

// Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla.Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez.El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma.Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

// creo array con palabras


const palabras = ["programacion", "web", "javascript", "html", "computadora", "codigo"];

// defino la palabra random a adivinar
let adivina = palabras[Math.round(Math.random() * (palabras.length - 1))];
// la separo en letras
let adivinaLetra = adivina.split('');

// defino i para usarlo en el while
let i = 0;
let resultado = "";

// Defino el mensaje de sugerencia
let sugerencia = "Sugerencia: "


// pido primer intento
let usuarioAdivina = prompt("Adivine la palabra");

// bucle para segundo intento +
while (adivina != usuarioAdivina && resultado != "perdiste") {

    // le voy agregando desde la primer letra de adivinaLetra
    sugerencia += adivinaLetra[i];

    // sumo 1 a i
    i++;

    usuarioAdivina = prompt(`Intente nuevamente
    ${sugerencia}`);
    if (i === (adivinaLetra.length - 1) && usuarioAdivina != adivina) {
        resultado = "perdiste";
    }
}

if (resultado === "perdiste") {
    alert("Ha perdido. La palabra era " + adivina);
} else if (adivina == usuarioAdivina) {
    alert("Ganaste!!!");
}