// 💲Cara o cruz

// Crear un programa que permita escoger entre cara o cruz.El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no.El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar.Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.


// comparar lo que puso el usuario, con el random (while != salir) 
// escoger cara o cruz (prompt)
// resultado aleatorio MATH.RANDOM(2)
// asigno valor cara o cruz a random

let computadora = "";
let usuario = "";
let resultado = 0;
let resultadoMayor = 0;

usuario = prompt("Elija cara o cruz o salir");

while (usuario != "salir") {
    computadora = Math.round(Math.random());
    computadora === 0 ? computadora = "cara" : computadora = "cruz";

    if (computadora === usuario) {
        resultado++;
        usuario = prompt(`Ganaste! Vueltas consecutivas ganadas: ${resultado}
        Elija cara o cruz o salir`);
    } else {
        resultado = 0;
        usuario = prompt(`Perdiste! Vueltas consecutivas ganadas: ${resultado}
        Elija cara o cruz o salir`);
    }

    if (resultado > resultadoMayor) {
        resultadoMayor = resultado;
    }

    if (usuario === "salir") {
        alert(`Máxima cantidad de vueltas consecutivas ganadas: ${resultadoMayor}
        Adios`);
    }

}
