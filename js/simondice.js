// Simón dice II

// Replicar el juego de Simón dice.El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más.El usuario debe ingresar los colores de la secuencia uno por uno.Si erra la secuencia(es decir, si ingresa algún color mal), el programa debe terminar.Los colores posibles son: rojo, azul, verde y amarillo.Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.

// genero array de colores para utilizarlo random
let color = ["rojo", "azul", "verde", "amarillo"];

// genero variable para tipo de juego (rondas hasta perder o definidas por usuario)
let rondasUsuario = 0;
let juego = prompt("Escriba '1' si quiere rondas infinitas hasta perder o '2' si quiere definir la cantidad de rondas");

// genero variables dinámicas para el juego
let usuario = "";
let simonDice = "";
let ronda = 1; // inicio de rondas
let mensaje = "";
// defino secuencia
simonDice += color[Math.round(Math.random() * (color.length - 1))];

// primera ronda
if (juego === "2") {
    // usuario define cantidad de rondas, en caso de elegir ese tipo de juego
    rondasUsuario = Number(prompt("Elegí la cantidad de rondas a jugar"));
    alert(`Simón dice: 
    ${simonDice}`);
    usuario = prompt("¿Qué dice Simón?");

    while (ronda < rondasUsuario && simonDice === usuario) {
        simonDice += " " + color[Math.round(Math.random() * (color.length - 1))];
        alert(`Ronda ${ronda}: Acertaste!
        Simón dice:
        ${simonDice}`);
        usuario = prompt("¿Qué dice ahora Simón?");
        ronda++;
    }
    // se terminaron las rondas, chequeo si ganó o perdió
    if (simonDice === usuario) {
        alert(`Ganaste! Sobreviviste las ${rondasUsuario} rondas definidas`)
    } else {
        alert(`Perdiste. La respuesta era: ${simonDice}.
        Sobreviviste un total de ${ronda - 1} rondas`)
    }



} else if (juego === "1") {

    alert(`Simón dice:
    ${simonDice}`);
    usuario = prompt("¿Qué dice Simón?");

    while (simonDice === usuario) {
        simonDice += " " + color[Math.round(Math.random() * (color.length - 1))];
        alert(`Ronda ${ronda}: Acertaste!
        Simón dice:
        ${simonDice}`);
        usuario = prompt("¿Qué dice ahora Simón?");
        ronda++;
    }

    alert(`Perdiste. La respuesta era: ${simonDice}.
    Sobreviviste un total de ${ronda - 1} rondas`)

}
