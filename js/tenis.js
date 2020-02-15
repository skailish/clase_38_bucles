// Tenis

// Crear un programa para llevar la cuenta del puntaje de un partido de tenis.Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado.Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

// creo variables para los nombres
const jugadora1 = prompt("Ingrese el nombre de la jugadora 1");
const jugadora2 = prompt("Ingrese el nombre de la jugadora 2");

// creo variables para resultados dinámicos
let resultadoJugadora1 = 0;
let resultadoJugadora2 = 0;

// defino variable dinámica de mensaje durante el partido
let ganadora = "";
let mensajePartido = "";


// pido primer resultado
let set = prompt(`Ingrese el nombre de la ganadora del set: ${jugadora1} o ${jugadora2}`);


while (resultadoJugadora1 < 3 && resultadoJugadora2 < 3) { // mientras ambas estén bajo 3
    if (set === jugadora1) {
        resultadoJugadora1++;
    } else {
        resultadoJugadora2++;
    }
    //defino resultado general
    if (resultadoJugadora1 > resultadoJugadora2) {
        ganadora = jugadora1;
    } else if (resultadoJugadora1 < resultadoJugadora2) {
        ganadora = jugadora2;
    } else {
        ganadora = "Empate";
    }

    // defino mensaje durante el partido
    mensajePartido = `El partido va ${resultadoJugadora1} (${jugadora1}) a ${resultadoJugadora2} (${jugadora2}). Jugadora en ventaja: ${ganadora}`;

    if (resultadoJugadora1 < 3 && resultadoJugadora2 < 3) { // si no ganó ya alguna
        set = prompt(`Ingrese el nombre de la ganadora del set: ${jugadora1} o ${jugadora2}
        ${mensajePartido}`);
    }

}

alert(`El partido finalizó. La ganadora es ${ganadora}`);